<script setup>
import { number, string } from 'yup';
import { useForm } from 'vee-validate';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import FormItem from '../FormItem.vue';
import { inject } from 'vue';
import InputNumber from 'primevue/inputnumber';

const path = window.location.pathname;
const id = parseInt(path.split("/")[3]);

const jsonData = inject('json');
const currentBookInfo = jsonData.data.books.find(i => i.id == id);

const toast = useToast();

const schema = {
    title: string().min(0).max(100).required().label('Title'),
    year: number().min(0).max(3000).required().label('Year'),
    cover: string().min(0).max(1000).required().label('Cover'),
    authorId: string().min(0).max(500).required().label('Author'),
    publisherId: string().min(0).max(500).required().label('Publisher'),
    sinopsis: string().min(0).max(500).required().label('Sinopsis'),
};

const {
    defineField,
    handleSubmit,
    resetForm

} = useForm({ validationSchema: schema });

const [title] = defineField('title');
const [year] = defineField('year');
const [cover] = defineField('cover');
const [authorId] = defineField('authorId');
const [publisherId] = defineField('publisherId');
const [sinopsis] = defineField('sinopsis');

title.value = currentBookInfo.title;
year.value = currentBookInfo.year;
cover.value = currentBookInfo.cover;
authorId.value = currentBookInfo.authorId;
publisherId.value = currentBookInfo.publisherId;
sinopsis.value = currentBookInfo.sinopsis;


const onSubmit = handleSubmit((values) => {

    const bookObject = {
        id,
        title,
        year,
        cover,
        authorId,
        publisherId,
        sinopsis
    }

    const bookIndex = jsonData.data.books.findIndex(i => i.id == id);
    jsonData.data.books[bookIndex] = bookObject;

    jsonData.modifyData(jsonData.data);

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
            <span>Edit Book</span>
        </div>

        <form @submit="onSubmit" :id="formId" autocomplete="off">
            <div class="card mt-10">
                <div class="title">Edit Book</div>

                <div class="flex gap-3">
                    <FormItem name="title" label="Title" class="w-1/4">
                        <InputText placeholder="Lord of The Rings" v-model="title" />
                    </FormItem>

                    <FormItem name="year" label="Year" class="w-1/4">
                        <InputNumber placeholder="1987" v-model="year" />
                    </FormItem>

                    <FormItem name="cover" label="Cover URL" class="w-1/4">
                        <InputText placeholder="https://www.imgur.com/..." v-model="cover" />
                    </FormItem>

                    <FloatLabel>
                        <FormItem name="authorId" label="Author" class="w-1/4">
                            <Select v-model="authorId" :options="jsonData.data.authors" id="authorId" optionLabel="name"
                                optionValue="id" placeholder="J.R.R Tolkien" class="w-full md:w-56" />
                        </FormItem>
                    </FloatLabel>

                    <FloatLabel>
                        <FormItem name="publisherId" label="Publisher" class="w-1/4">
                            <Select v-model="publisherId" :options="jsonData.data.publishers" id="publisherId"
                                optionValue="id" optionLabel="name" placeholder="Rocco" class="w-full md:w-56" />
                        </FormItem>
                    </FloatLabel>

                    <FormItem name="sinopsis" label="Sinopsis" class="w-1/4">
                        <InputText placeholder="This book is about..." v-model="sinopsis" />
                    </FormItem>


                </div>

                <Button @click="onSubmit" type="submit" :form="formId" label="Edit" icon="pi pi-save"
                    severity="success" />
            </div>
        </form>


    </div>
</template>