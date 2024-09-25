<script setup>
import { inject, reactive } from 'vue';
import { useForm } from 'vee-validate';
import { string } from 'yup';
import FormItem from '../FormItem.vue';
import InputText from 'primevue/inputtext';

const jsonData = inject('json');
// const schema = {

//     titleToSearch: string().min(0).max(500).required().label('Title'),
//     authorToSearch: string().min(0).max(500).required().label('Author'),
//     publisherToSearch: string().min(0).max(500).required().label('Publisher'),

// };

// const {
//     defineField,
// } = useForm({ validationSchema: schema });

// const [titleToSearch] = defineField('titleToSearch');
// const [authorToSearch] = defineField('authorToSearch');
// const [publisherToSearch] = defineField('publisherToSearch');

const books = jsonData.data.books.map(cur => {
    const found_author = jsonData.data.authors.find(i => i.id == cur.authorId);
    const found_publisher = jsonData.data.publishers.find(i => i.id == cur.publisherId);
    const body = {
        id: cur.id,
        cover: cur.cover,
        title: cur.title,
        year: cur.year,
        author: {
            name: found_author.name,
            id: found_author.id
        },
        publisher: {
            name: found_publisher.name,
            id: found_publisher.id
        }
    };
    return body
});

// let updatedBooks = reactive(books);
// console.log(updatedBooks);
// function updateBooks() {
//     alert("a");
//     let newBooks = books;
//     newBooks = newBooks
//         .filter(i => false);

//     updatedBooks = [...newBooks];
//     console.log(updatedBooks);
// }

</script>
<template>
    <div class="w-full">
        <div class="flex justify-start mb-5">
            <a href="/book/new"
                class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:slate-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:slate-800">
                New Book
            </a>
        </div>

        <div class="flex justify-center text-2xl">
            <span>Book</span>
        </div>

        <!-- <div class="flex gap-3">
            <FormItem name="titleToSearch" label="Title" class="w-1/4">
                <InputText placeholder=" Lord of the Rings" v-model="titleToSearch" @change="updateBooks()" />
            </FormItem>
            <FormItem name="authorToSearch" label="Title" class="w-1/4">
                <InputText placeholder="J.R.R Tolkien" v-model="authorToSearch" />
            </FormItem>
            <FormItem name="publisherToSearch" label="Title" class="w-1/4">
                <InputText placeholder="Rocco" v-model="publisherToSearch" />
            </FormItem>
        </div> -->

        <div class="card mt-10">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Picture
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Year
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Author
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Publisher
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(book, i) in books" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ book.id }}
                            </th>
                            <td class="px-6 py-4">
                                <div class="flex justify-center">
                                    <img class="h-20 md:h-40 lg:h-80 max-w-full rounded-lg" :src="book.cover" alt="">
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    :href="'/book/' + book.id">
                                    {{ book.title }}
                                </a>
                            </td>
                            <td class="px-6 py-4">
                                {{ book.year }}
                            </td>
                            <td class="px-6 py-4">
                                <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    :href="'/author/' + book.author.id">
                                    {{ book.author.name }}
                                </a>
                            </td>
                            <td class="px-6 py-4">
                                <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    :href="'/publisher/' + book.author.id">
                                    {{ book.publisher.name }}
                                </a>
                            </td>
                            <td class="px-6 py-4">
                                <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    :href="'/book/edit/' + book.id">
                                    <span class="pi pi-pen-to-square"></span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    </div>
</template>