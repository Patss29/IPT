<script setup></script>

<template>
    <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <h1 class="text-2xl font-bold mb-6">Students & Enrolled Courses</h1>
        <div class="overflow-x-auto bg-white rounded-lg shadow">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrolled Courses</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <!-- Row 1 -->
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">Jane Doe</div>
                      <div class="text-sm text-gray-500">Biology major</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jane.doe@example.edu</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <ul class="list-disc ml-5 space-y-1">
                    <li>Biology 101</li>
                    <li>Chemistry 102</li>
                    <li>English Literature</li>
                  </ul>
                </td>
              </tr>
              <!-- Row 2 -->
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">John Smith</div>
                      <div class="text-sm text-gray-500">Physics major</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john.smith@example.edu</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <ul class="list-disc ml-5 space-y-1">
                    <li>Physics 201</li>
                    <li>Calculus 102</li>
                    <li>Computer Science 105</li>
                  </ul>
                </td>
              </tr>
              <!-- Row 3 -->
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">Emily Chen</div>
                      <div class="text-sm text-gray-500">Mathematics major</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">emily.chen@example.edu</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <ul class="list-disc ml-5 space-y-1">
                    <li>Calculus 201</li>
                    <li>Statistics 202</li>
                    <li>Data Structures</li>
                  </ul>
                </td>
              </tr>
              <!-- Row 4 -->
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">Sophia Lee</div>
                      <div class="text-sm text-gray-500">Economics major</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">sophia.lee@example.edu</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <ul class="list-disc ml-5 space-y-1">
                    <li>Microeconomics</li>
                    <li>Macroeconomics</li>
                    <li>Business Ethics</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
</template>