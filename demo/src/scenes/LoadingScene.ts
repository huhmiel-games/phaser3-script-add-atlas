import { Scene } from 'phaser';

// IMPORT ATLAS //

export default class LoadingScene extends Scene
{

    public inputMergerScene: Scene;
    public keys: any;
    constructor ()
    {
        super({
            key: 'LoadingScene',
        });
    }

    public preload ()
    {
        // PRELOAD ATLAS //
       
    }

    public create ()
    {
        // ANIMS ATLAS //

    }
}