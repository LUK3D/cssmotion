/**
 * ## CSLUKSETTINGS 🚀
 * Defines the settings for the Timeline
 */
export interface CsLukSettings{
    /**Initial keyframe */
    start:number,
    /**End keyframe */
    end:number,
    /**Start keyframe*/
    currentKeyFrame?:Keyframe,
}
/**
 * ## Keyframe 🚀
 * Defines Keyframe properties
 */
export interface Keyframe{
    id:string,
    position:number,
    css:Array<string>
}
/**
 * ## Timeline 🚀
 * Defines Timeline properties
 */
export interface Timeline{
    /**Animation Keyframes */
    frames:Array<Keyframe>
    /** The speed of the animation (FPS) of the timeline*/
    playbackSpeed:number,
    /**The function to call to play the animation */
    playBack:Function,
    /**Timeline Settings */
    settings:CsLukSettings,
}