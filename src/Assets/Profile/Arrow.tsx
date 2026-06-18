import Svg, {G, Mask, Path, Rect} from "react-native-svg";


export default function Arrow() {

    return(<Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Mask id="mask0_109_5876" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
            <Rect x="0.5" y="0.5" width="13" height="13" fill="#D9D9D9" stroke="#999999"/>
        </Mask>
        <G mask="url(#mask0_109_5876)">
            <Path d="M7 1L13 7L7 13" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </G>
    </Svg>)

}
