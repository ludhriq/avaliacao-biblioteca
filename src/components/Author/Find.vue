<script setup>
import { inject } from 'vue';
const path = window.location.pathname;
const id = path.split("/")[2];

const jsonData = inject('json');
const author = jsonData.data.authors.find(i => i.id == id);
const books = jsonData.data.books
    .filter(i => i.authorId == id)
    .map(cur => {
        const found_publisher = jsonData.data.publishers.find(i => i.id == cur.publisherId);

        const body = {
            id: cur.id,
            cover: cur.cover,
            title: cur.title,
            year: cur.year,
            author: {
                name: author.name,
                id: author.id
            },
            publisher: {
                name: found_publisher.name,
                id: found_publisher.id
            }
        };
        return body
    });


</script>
<template>
    <div class="w-full">
        <div class="flex justify-start mb-5">
            <a href="/author/new"
                class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:slate-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:slate-800">
                New Author
            </a>
        </div>

        <div class="flex justify-center text-2xl">
            <span>Author</span>
        </div>

        <div class="card mt-10 bg-gray-800">
            <div class="border-t border-gray-500 px-4 py-5 sm:p-0">
                <dl class="sm:divide-y sm:divide-gray-500">
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Id
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            {{ author.id }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Name
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            {{ author.name }}
                        </dd>
                    </div>

                </dl>
            </div>
        </div>

        <div class="flex justify-center text-2xl mt-5">
            <span>Author Books</span>
        </div>
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
                                {{ book.title }}
                            </td>
                            <td class="px-6 py-4">
                                {{ book.year }}
                            </td>
                            <td class="px-6 py-4">
                                {{ book.author.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ book.publisher.name }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>