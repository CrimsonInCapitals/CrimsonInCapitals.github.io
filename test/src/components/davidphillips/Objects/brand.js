import React from 'react';
export const mode = 'Dark'

export class layerProps{
    constructor(b,t,c,a,s){
        this.Background = b
        this.Title = t
        this.Copy = c
        this.Accent = a
        this.Shadow = s
    }
}
export const White = '#ffffff'
export const Bone = '#f2efed'
export const Stone = '#d9d2ca'
export const Griege = '#a0948e'
export const Typhoon = '#7a6f6d'
export const Evening = '#494444'
export const Aubergine = '#292428'
export const Dark = '#1A1A1A'

export const brand= {
    layers:{
        one:new layerProps(White,Typhoon,Evening,Stone,Stone),
        two:new layerProps(Bone,Typhoon,Evening,Stone,Stone),
        Three:new layerProps(Stone,Evening,Dark,Bone,Typhoon),
        Four:new layerProps(Griege,Evening,Dark,Stone,Evening),
        Five: new layerProps(Typhoon,Bone,White,Evening,Evening),
        Six: new layerProps(Evening,Bone,White,Aubergine,Aubergine),
        Seven: new layerProps(Aubergine,Stone,Bone,Evening,Dark),
        Eight: new layerProps(Dark,Stone,Bone,Evening,'#000000'),
    },
    Dark:{
        One:new layerProps(Aubergine,Stone,Bone,Evening,Dark),
        Two:new layerProps(Dark,Stone,Bone,Evening,'#000000'),
        Three:new layerProps(Evening,Bone,White,Aubergine,Aubergine),
        Four: new layerProps(Typhoon,Bone,White,Evening,Evening),
    },
    Light:{
        One:new layerProps(White,Typhoon,Evening,Stone,Stone),
        Two:new layerProps(Bone,Typhoon,Evening,Stone,Stone),
        Three:new layerProps(Stone,Evening,Dark,Bone,Typhoon),
        Four:new layerProps(Griege,Evening,Dark,Stone,Evening),
    }
}

export class properties{
    constructor(layer='One'){
        this.Background = brand[mode][layer].Background
        this.Title = brand[mode][layer].Title
        this.Copy = brand[mode][layer].Copy
        this.Accent = brand[mode][layer].Accent
        this.Shadow = brand[mode][layer].Shadow
    }
}