<script setup>
import { string } from 'yup';
import { useForm } from 'vee-validate';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FormItem from '../FormItem.vue';
import { inject } from 'vue';

const jsonData = inject('json');


const formId = Date.now();
const toast = useToast();

const schema = {
    name: string().min(0).max(100).required().label('Name'),
};

const {
    defineField,
    handleSubmit,
    resetForm

} = useForm({ validationSchema: schema });

const [name] = defineField('name');

const onSubmit = handleSubmit((values) => {

    const authorObject = {
        id: formId,
        name: values.name
    }

    jsonData.data.authors.push(authorObject);
    jsonData.modifyData(jsonData.data);


    log(values);

    toast.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Informações salvas com sucesso!',
        life: 3000,
    });

}, (error) => {

    log(error)

    toast.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Não foi possível salvar!',
        life: 3000,
    });
});

</script>
<template>
    <div class="w-full">
        <div class="flex justify-center text-2xl">
            <span>New Author</span>
        </div>

        <form @submit="onSubmit" :id="formId" autocomplete="off">
            <div class="card mt-10">
                <div class="title">New Author</div>

                <div class="flex gap-3">
                    <FormItem name="name" label="Name" class="w-1/4">
                        <InputText placeholder="J.R.R Tolkien" v-model="name" />
                    </FormItem>
                </div>

                <Button @click="onSubmit" type="submit" :form="formId" label="Create" icon="pi pi-save"
                    severity="success" />
            </div>
        </form>


    </div>
</template>