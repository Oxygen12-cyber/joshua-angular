import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgClass],
  template: `
    <div class="py-16 px-6 bg-white text-gray-900 min-h-screen font-sans">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Selected Work</h2>
        <p class="text-xl text-gray-600 mb-16">A collection of things I've built successfully.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          @for (project of projects; track project.id) {
            <div
              class="border border-gray-200 p-8 transition-all duration-300 flex flex-col group hover:shadow-sm"
              [ngClass]="{
                'hover:border-blue-500': project.id === 1,
                'hover:border-emerald-500': project.id === 2,
                'hover:border-violet-500': project.id === 3,
                'hover:border-rose-500': project.id === 4
              }"
            >
              <div class="mb-4">
                <h3 class="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{{ project.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ project.description }}</p>
              </div>
              <div class="mt-auto pt-6 flex flex-wrap gap-2">
                @for (tech of project.techs; track tech) {
                  <span class="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold uppercase tracking-wider">{{ tech }}</span>
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
    { id: 1, title: 'Nexus Analytics Platform', description: 'Enterprise data visualization suite built with high-performance metrics aggregation and reporting capabilities.', techs: ['Angular', 'TypeScript', 'D3.js'] },
    { id: 2, title: 'Aurora E-Commerce', description: 'A seamless shopping experience featuring real-time inventory synchronization and a blazing-fast checkout flow.', techs: ['Angular', 'Tailwind CSS', 'Stripe'] },
    { id: 3, title: 'Chronos Task Management', description: 'Collaborative task planner with real-time updates and interactive Kanban boards for remote teams.', techs: ['Angular', 'RxJS', 'Firebase'] },
    { id: 4, title: 'Vertex Design System', description: 'A fully accessible UI component library built from scratch to streamline company-wide development.', techs: ['Angular', 'Storybook', 'Sass'] }
  ];
}
