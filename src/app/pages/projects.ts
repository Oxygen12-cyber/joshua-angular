import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <div class="py-16 px-6 bg-white text-gray-900 min-h-screen font-sans ">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Selected Work</h2>
        <p class="text-xl text-gray-600 mb-16">A collection of things I've built successfully.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          @for (project of projects; track project.id) {
            <div class="border border-gray-200 p-8 hover:border-2 hover:border-blue-600 transition-colors duration-300 flex flex-col group">
              <div class="mb-4">
                <h3 class="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{{ project.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ project.description }}</p>
              </div>
              <div class="mt-auto pt-6 flex flex-wrap gap-2">
                @for (tech of project.techs; track tech) {
                  <span class="px-3 py-1 bg-orange-100 text-gray-800 text-xs font-semibold uppercase tracking-wider">{{ tech }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class ProjectsComponent {
  projects = [
    { id: 1, title: 'Citizen Safety Platform', description: 'A platform built using cordova to alert users nd citizens about Accidents and emergencies in their areas', techs: ['Cordova', 'CSS', 'HTML'] },
    { id: 2, title: 'Cordova CV app', description: 'A simple single page CV application built with Cordova to display my Cv.', techs: ['Android', 'CSS', 'JavaScript'] },
    { id: 3, title: 'Improved CV app', description: 'A modern, responsive CV application featuring a dynamic dashboard, project showcase, and contact management system with routing included.', techs: ['Cordova','JavaScript'] },
    { id: 4, title: 'Portfolio app', description: 'A portfolio app built with Angular to showcase my work.', techs: ['Angular'] }
  ];
}
