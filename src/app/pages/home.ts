import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div class="min-h-[80vh] flex items-center justify-center py-16 px-6 bg-white text-gray-900 font-sans">
      <div class="max-w-3xl flex flex-col items-start gap-6">
        <span class="text-blue-600 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
          Hi, I'm Joshua. <br/>
          <span class="text-gray-400">Software Developer <span class="text-8xl text-orange-200">.</span></span>
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed max-w-2xl mt-4">
          I build clean, accessible, and fast web applications. Focusing on intuitive designs and scalable code.
        </p>
        <div class="flex gap-4 mt-8">
          <a routerLink="/projects" class="px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
            View My Work
          </a>
          <a routerLink="/contact" class="px-8 py-4 border border-gray-300 font-medium hover:bg-gray-50 transition-colors text-gray-900">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}
