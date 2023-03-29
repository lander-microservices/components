import React from "react";

export default function Advertorial({ content_block }){
    return (
        <div className={` ${content_block.lander_hero_section_advertorial_color} ${content_block.lander_hero_section_advertorial_bg_color}`}>
            {content_block.lander_hero_section_advertorial_name}
        </div>
    )
}