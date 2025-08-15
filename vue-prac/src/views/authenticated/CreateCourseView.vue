<script setup></script>

<template>
    <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <h1 class="text-2xl font-bold mb-6">Create a New Course</h1>
        <div class="bg-white rounded-lg shadow p-6 max-w-3xl">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="course-title" class="block text-sm font-medium text-gray-700">Course Title</label>
              <input
                type="text"
                id="course-title"
                name="course-title"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Introduction to Programming"
              />
            </div>
            <div>
              <label for="course-code" class="block text-sm font-medium text-gray-700">Course Code</label>
              <input
                type="text"
                id="course-code"
                name="course-code"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="CS101"
              />
            </div>
            <div>
              <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
              <select
                id="category"
                name="category"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option>Computer Science</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>Humanities</option>
                <option>Business</option>
              </select>
            </div>
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700">Course Description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Provide a brief description of the course, learning objectives, and any prerequisites."
              ></textarea>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  id="start-date"
                  name="start-date"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label for="end-date" class="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  id="end-date"
                  name="end-date"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label for="meeting-info" class="block text-sm font-medium text-gray-700">Meeting Info</label>
              <input
                type="text"
                id="meeting-info"
                name="meeting-info"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., Mondays & Wednesdays, 10 AM – 11 AM"
              />
            </div>
            <div>
              <label for="max-students" class="block text-sm font-medium text-gray-700">Maximum Students</label>
              <input
                type="number"
                id="max-students"
                name="max-students"
                min="1"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="30"
              />
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Course
              </button>
            </div>
          </form>
        </div>
      </main>
</template>