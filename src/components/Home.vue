<script setup>
import { inject } from 'vue';

const jsonData = inject('json');


</script>
<template>
    <div class="w-full">
        <div class="flex justify-center text-2xl">
            <span>Home</span>
        </div>

        <div class="card mt-10 bg-gray-800">
            <div class="border-t border-gray-500 px-4 py-5 sm:p-0">
                <dl class="sm:divide-y sm:divide-gray-500">
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Books Number
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            {{ jsonData.data.books.length }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Authors Number
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            {{ jsonData.data.authors.length }}
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-100">
                            Publishers Number
                        </dt>
                        <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                            {{ jsonData.data.publishers.length }}
                        </dd>
                    </div>

                </dl>
            </div>
        </div>


    </div>
</template>