<script setup>
import { string } from 'yup';
import { useForm } from 'vee-validate';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FormItem from '../FormItem.vue';
import { inject } from 'vue';

const path = window.location.pathname;
const id = parseInt(path.split("/")[3]);

const jsonData = inject('json');
const currentAuthorInfo = jsonData.data.authors.find(i => i.id == id);

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
name.value = currentAuthorInfo.name;

const onSubmit = handleSubmit((values) => {

    const authorObject = {
        id,
        name: values.name
    }

    const authorIndex = jsonData.data.authors.findIndex(i => i.id == id);
    jsonData.data.authors[authorIndex] = authorObject;

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
            <span>Edit Author</span>
        </div>

        <form @submit="onSubmit" :id="formId" autocomplete="off">
            <div class="card mt-10">
                <div class="title">Edit Author</div>

                <div class="flex gap-3">
                    <FormItem name="name" label="Name" class="w-1/4">
                        <InputText placeholder="Houghton Mifflin" v-model="name" />
                    </FormItem>
                </div>

                <Button @click="onSubmit" type="submit" :form="formId" label="Save" icon="pi pi-save"
                    severity="success" />
            </div>
        </form>


    </div>
</template>