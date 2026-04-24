import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="py-24 px-6 bg-white text-gray-900 min-h-[80vh] flex flex-col items-center justify-center font-sans text-center">
      <h2 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Let's work together.</h2>
      <p class="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
        I am currently available for freelance projects or full-time opportunities. 
        If you have a project that needs some creative touch, I'd love to hear about it.
      </p>
      <a href="mailto:joshua@example.com" class="px-10 py-5 bg-gray-900 text-white font-medium text-lg hover:bg-gray-800 transition-colors">
        Contact me here
      </a>
      
      <div class="mt-24 flex gap-8 text-sm font-semibold tracking-wider uppercase text-gray-500">
        <a href="#" class="hover:text-gray-900 transition-colors">Twitter</a>
        <a href="#" class="hover:text-gray-900 transition-colors">LinkedIn</a>
        <a href="#" class="hover:text-gray-900 transition-colors">GitHub</a>
      </div>
    </div>
  `
})
export class ContactComponent {}
