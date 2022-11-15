// imports at the top
import AudioComponent from './components/TheAudioComponent.js';
import VideoComponent from './components/TheVideoComponent.js';

(() => {
  // Vue stuff goes here
  const { createApp } = Vue

  createApp({
    data() {
      return {
        activeComponent: AudioComponent
      }
    }, 

    methods: {
      switchComponents() {
        // debugger;
        this.activeComponent = (this.activeComponent.name === "VideoComponent") ? AudioComponent : VideoComponent
      }
    }

  }).mount('#app');
})()