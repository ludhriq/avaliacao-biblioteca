<script setup>
import { inject } from 'vue';
const path = window.location.pathname;
const id = path.split("/")[2];

const jsonData = inject('json');
const book = jsonData.data.books.find(i => i.id == id);
const bookAuthor = jsonData.data.authors.find(i => i.id == book.authorId);
const bookPublisher = jsonData.data.publishers.find(i => i.id == book.publisherId);

</script>
<template>
    <div class="w-full">

        <div class="flex justify-start mb-5">
            <a href="/publisher/new"
                class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:slate-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:slate-800">
                New Publisher
            </a>
        </div>

        <div class="flex justify-center text-2xl">
            <span>Book</span>
        </div>

        <div class="card mt-10 bg-gray-800">
            <div class="border-t border-gray-500 px-4 py-5 sm:p-0">
                <dl class="sm:divide-y sm:divide-gray-500">
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Id
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            {{ book.id }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Title
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            {{ book.title }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Book Author
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            {{ bookAuthor.name }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Book Publisher
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            {{ bookPublisher.name }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Year
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            {{ book.year }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Image
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            <img class="h-dvh max-w-full rounded-lg" :src="book.cover" alt="">
                        </dd>
                    </div>
                </dl>
            </div>
        </div>

    </div>
</template>