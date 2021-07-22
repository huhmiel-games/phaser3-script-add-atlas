# phaser3-script-add-atlas
Script which automates the import, the preload and the creation of animations, of an atlas. 

You must configure the script on your project first.
The scene receiving the changes must contain special comments.

## HOW TO
  - Put this script at the root of project
  - The atlas image and atlas json must have the same name
  - Change the config below to suit your needs
  - Inside your scene file, you must indicate where to place each section with special comments:

  // IMPORT ATLAS //      <-- top of file

  // PRELOAD ATLAS //     <-- in the preload section
  
  // ANIMS ATLAS //       <-- in the create section
  
  Start the script:
  node ./addAtlas ./src/assets/graphics/characters/player/playerAtlas <-- url of your atlas, WITHOUT THE FILE EXTENSION !!