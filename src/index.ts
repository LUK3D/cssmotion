import { Timeline } from "./types";

class CsLuk{
    timelines:Array<Timeline>
    playback?:Function;
    isPlaying:boolean;
    constructor(){
        this.timelines = [];
        this.isPlaying = false;
    }
    addTimeline(timeline:Timeline){
        this.timelines.push(timeline);
    }
    /**
     * ## Play animation on the given timeline 🚀
     * @param timeline Timeline with animation to be played
     * @param onStop Function to be called when the timeline is stopped
     */
    play( timeline:Timeline, onStop?:Function ){
        timeline.playBack = ()=>{
            let currentPosition = 0;
            this.isPlaying = true;
            setInterval(
                ()=>{
                    if(currentPosition == timeline.settings.start){
                        console.log(`Playing frame ${currentPosition}`);
                        currentPosition ++;
                    }
                    if(currentPosition>=timeline.settings.end){
                        this.isPlaying = false;
                        onStop && onStop(currentPosition,timeline);
                    }
                }, timeline.playbackSpeed
            );
        }
    }
}