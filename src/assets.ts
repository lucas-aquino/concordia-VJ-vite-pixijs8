import { Assets } from "pixi.js"


export const assetLoad = async () => {

  const assets = [
    //Player
    { alias: 'player_spritesheet', src: '/static/player/player.png' },

    //UI
    { alias: 'grey_panel', src: '/static/ui/kenny_ui/grey_panel.png' },
    { alias: 'button_blue_square', src: '/static/ui/basic_gui_bundle/ButtonsIcons/IconButton_Small_Blue_Square.png' },
    
    { alias: 'filled_star_outline', src: '/static/ui/basic_gui_bundle/Icons/Icon_Large_Star_WhiteOutline.png' },
    { alias: 'empty_star_outline', src: '/static/ui/basic_gui_bundle/Icons/Icon_Large_StarSrey_SeethroughOutline.png' },

    { alias: 'btn_realessed_blue', src: '/static/ui/kenny_ui/blue_button04.png' },
    { alias: 'btn_pressed_blue', src: '/static/ui/kenny_ui/blue_button05.png' },
    { alias: 'btn_disabled', src: '/static/ui/kenny_ui/grey_button11.png' },
  ]




  await Assets.load(assets)

}

