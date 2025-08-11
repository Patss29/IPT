<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 class="text-5xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
        <p class="text-lg text-gray-700 mb-6">The page you are looking for does not exist.</p>
        <router-link to="/" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Go back to Home
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NoPageFound'
}
</script>
