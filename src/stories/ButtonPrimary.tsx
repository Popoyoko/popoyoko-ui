import './buttonPrimary.css';
import React from 'react';

interface ButtonPrimaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    customIcon?: File | null;
    onClick?: () => void;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    label,
    typeSvg,
    customIcon,
    onClick,
}) => {

    let icon = null;

    if(typeSvg === 'none'){
        return(
            <button className='buttonPrimary'>
                {label}
            </button>
        );
    } else if(typeSvg === 'left'){
        return(
            <button className='buttonPrimary'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" version="1.1" viewBox="0 0 48 48"><title>illustration/colors</title>
                <g id="illustration/colors" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><circle id="Oval" cx="23.763" cy="16.192" r="13.271" fill="#FC521F" opacity=".6"/><circle id="Oval-Copy" cx="15.468" cy="32.308" r="13.271" fill="#66BF3C" opacity=".6"/><path id="Combined-Shape" fill="#FF5F95" d="M15.4683651,19.0362231 C21.5434817,19.0362231 26.6652087,23.1181689 28.2404554,28.6889694 C26.8420385,29.1906678 25.3344184,29.4637769 23.7630101,29.4637769 C17.6878936,29.4637769 12.5661666,25.3818311 10.9909199,19.8110306 C12.3898993,19.3092302 13.8972501,19.0362231 15.4683651,19.0362231 Z"/><circle id="Oval-Copy-2" cx="32.532" cy="32.308" r="13.271" fill="#1EA7FD" opacity=".6"/><path id="Combined-Shape" fill="#87E6E5" d="M24.00025,22.1417324 C26.897967,24.5762286 28.7397972,28.2268506 28.7397972,32.3076552 C28.7397972,36.3884597 26.897967,40.0390817 24.00025,42.4735779 C21.1018087,40.038637 19.2602028,36.3882111 19.2602028,32.3076552 C19.2602028,28.2815316 21.0530043,24.6741393 23.8838362,22.2402492 Z"/><path id="Combined-Shape" fill="#FBD178" d="M32.5316349,19.0362231 C33.9415155,19.0362231 35.3000478,19.2560712 36.5748203,19.6633557 C35.0489179,25.3104816 29.8909911,29.4637769 23.7630101,29.4637769 C22.3527608,29.4637769 20.9938866,29.2438138 19.7188247,28.8363247 C21.2451195,23.1900077 26.403293,19.0362231 32.5316349,19.0362231 Z"/><path id="Combined-Shape" fill="#FFF" d="M24.00025,22.1417324 L24.0124326,22.1519799 C24.1747744,22.288701 24.3337918,22.4292434 24.4893463,22.5734686 L24.3896855,22.4820008 C24.4671836,22.552408 24.5438453,22.6237194 24.619654,22.6959185 L24.4893463,22.5734686 C24.5690639,22.6473803 24.6478719,22.7222591 24.7257519,22.7980864 L24.619654,22.6959185 C24.6907654,22.7636441 24.7611262,22.8321506 24.8307226,22.9014245 L24.7257519,22.7980864 C24.8120661,22.8821258 24.8972403,22.9673303 24.981249,23.0536745 L24.8307226,22.9014245 C24.9073006,22.9776475 24.9829531,23.0547994 25.0576619,23.132862 L25.057852,23.1330605 C25.3140855,23.4007967 25.559391,23.679459 25.7928375,23.9681079 L25.7230574,23.8825538 C25.7985998,23.9743942 25.8729325,24.0672672 25.9460311,24.1611484 L25.7928375,23.9681079 C25.8624256,24.0541514 25.93096,24.1410823 25.998421,24.228881 L25.9460311,24.1611484 C26.0074362,24.2400115 26.0679704,24.319586 26.1276194,24.3998576 L25.998421,24.228881 C26.0663495,24.317288 26.1331896,24.4065749 26.1989214,24.4967216 L26.1276194,24.3998576 C26.204848,24.5037867 26.2805926,24.6088841 26.3548219,24.7151187 L26.1989214,24.4967216 C26.2678555,24.59126 26.3355706,24.6867441 26.4020436,24.7831507 L26.3548219,24.7151187 C26.4130013,24.798383 26.4702498,24.8823459 26.5265523,24.9669921 L26.4020436,24.7831507 C26.4678788,24.8786322 26.5324956,24.9750187 26.5958716,25.0722875 L26.5959296,25.0723765 C26.736338,25.2878741 26.870709,25.5077955 26.9987399,25.7318073 L26.9410662,25.6319089 C26.9973106,25.7283602 27.0523736,25.8255849 27.1062352,25.9235633 L26.9987399,25.7318073 C27.0539848,25.8284676 27.1080492,25.9258895 27.1609136,26.0240532 L27.1606656,26.0235927 C27.2696676,26.2259984 27.3733426,26.4310837 27.4717677,26.6391379 L27.4715275,26.6386302 C27.5541941,26.8133735 27.6329386,26.9896914 27.7079006,27.1679911 C27.7630163,27.299081 27.8161443,27.431391 27.8671831,27.5647345 L27.804312,27.4036517 C27.8391482,27.4912057 27.8730792,27.5792182 27.9060936,27.6676774 L27.8671831,27.5647345 C27.906613,27.6677486 27.9447959,27.7713796 27.9817136,27.8756091 L27.9060936,27.6676774 C27.946474,27.7758735 27.9854831,27.884738 28.0230997,27.9942498 L27.9817136,27.8756091 C28.0144978,27.9681688 28.0462842,28.0612004 28.0770597,28.1546911 L28.0230997,27.9942498 C28.0618265,28.1069941 28.0990774,28.2204244 28.1348294,28.3345177 L28.0770597,28.1546911 C28.1112208,28.2584663 28.1441365,28.3628071 28.175789,28.4676958 L28.1756797,28.4673338 L28.2408136,28.6893554 C28.2284694,28.6937793 28.2161167,28.6981854 28.2037557,28.7025737 L28.2404554,28.6889694 C27.9517707,28.7925384 27.6584322,28.8863659 27.3608394,28.97006 L27.3609965,28.9702524 C27.0695498,29.0519815 26.7741843,29.1241944 26.4751174,29.1863314 L26.5385665,29.1730829 C26.3901218,29.2046704 26.2407589,29.2337757 26.0905233,29.2603535 L26.4751174,29.1863314 C26.3367402,29.215082 26.1975707,29.2416755 26.0576458,29.2660754 L26.0905233,29.2603535 C25.9366833,29.2875689 25.7819282,29.312134 25.6263069,29.334 L26.0576458,29.2660754 C25.9017815,29.2932549 25.7449801,29.3177127 25.5872928,29.3393985 L25.6263069,29.334 C25.493366,29.3526793 25.3597929,29.3693888 25.2256182,29.3840982 L25.5872928,29.3393985 C25.4326976,29.360659 25.277251,29.3792552 25.1210012,29.3951396 L25.2256182,29.3840982 C25.0570566,29.4025774 24.8875455,29.4178998 24.7171453,29.4300052 L25.1210012,29.3951396 C24.9661341,29.4108835 24.810478,29.4239634 24.6540799,29.4343333 L24.7171453,29.4300052 C24.5612618,29.4410793 24.4046342,29.4494611 24.2473088,29.4551045 L24.6540799,29.4343333 C24.5098436,29.4438967 24.3649762,29.4511552 24.2195147,29.4560724 L24.2473088,29.4551045 C24.0865878,29.4608697 23.9251385,29.4637769 23.7630101,29.4637769 L23.3130142,29.4562912 C23.2993121,29.4558347 23.2856153,29.4553574 23.2719237,29.4548593 C22.9596275,29.4434959 22.6502324,29.4213577 22.3439491,29.3888006 L22.3886972,29.3934808 C22.2468147,29.3788837 22.105595,29.3620515 21.9650736,29.3430199 L22.3439491,29.3888006 C22.1914515,29.3725905 22.0397254,29.3537976 21.8888152,29.3324664 L21.9650736,29.3430199 C21.8025527,29.3210088 21.6409661,29.2960557 21.4803691,29.2682161 L21.8888152,29.3324664 C21.7352182,29.3107553 21.5824665,29.2864149 21.4306071,29.2594919 L21.4803691,29.2682161 C21.3506285,29.2457255 21.2215338,29.221351 21.0931142,29.1951218 L21.4306071,29.2594919 C21.2772401,29.2323016 21.1247833,29.2024774 20.973285,29.1700676 L21.0931142,29.1951218 C20.9267071,29.1611338 20.7614335,29.1240315 20.5973571,29.0838786 L20.973285,29.1700676 C20.825476,29.138447 20.6785795,29.1043653 20.5326403,29.0678674 L20.5973571,29.0838786 C20.4596684,29.0501832 20.3228227,29.0143396 20.1868576,28.9763851 L20.5326403,29.0678674 C20.3930822,29.0329653 20.2543997,28.9958536 20.1166319,28.9565718 L20.1169729,28.956669 L19.7188247,28.8363247 L19.7188247,28.8363247 L19.7880988,28.5894836 C19.8166627,28.4914193 19.8463277,28.3938241 19.8770797,28.2967124 L19.8480041,28.389868 C19.888904,28.2573207 19.931824,28.1256601 19.9767281,27.9949221 L19.8770797,28.2967124 C19.9117081,28.1873592 19.9477148,28.0786191 19.9850793,27.9705124 L19.9853117,27.9700125 C20.1152243,27.5939638 20.2618428,27.2250995 20.4240731,26.8647811 L20.345088,27.0439391 C20.3899401,26.9402428 20.4360767,26.8372321 20.4834778,26.7349269 L20.4240731,26.8647811 C20.461061,26.78263 20.4988604,26.7009231 20.5374612,26.6196707 L20.4834778,26.7349269 C20.5344734,26.6248636 20.5869326,26.515617 20.6408302,26.4072119 L20.5374612,26.6196707 C20.5871241,26.5151329 20.6381134,26.4113474 20.6904074,26.308336 L20.6408302,26.4072119 C20.681671,26.3250682 20.7233378,26.2434076 20.7658197,26.1622412 L20.7658807,26.1619302 C20.8435258,26.013775 20.923959,25.866962 21.0070529,25.7218685 C21.2050227,25.3759931 21.4182299,25.0398756 21.6456589,24.7144306 L21.5286537,24.8848257 C21.5876708,24.7975143 21.6476996,24.7109431 21.7087233,24.6251289 L21.6456589,24.7144306 C21.6993229,24.6376387 21.7537788,24.5614411 21.8090146,24.4858495 L21.7087233,24.6251289 C21.7826333,24.5211934 21.8580028,24.4183683 21.9348018,24.3166836 L21.8090146,24.4858495 C21.8722751,24.3992759 21.9365587,24.3134973 22.0018475,24.2285315 L22.0016895,24.2288802 C22.3179789,23.8171232 22.6576794,23.4247699 23.0189296,23.053491 L22.8296293,23.2521975 C22.9033796,23.1732135 22.9780829,23.095131 23.0537208,23.0179683 L23.0189296,23.053491 C23.083529,22.9870982 23.1488175,22.9213793 23.2147836,22.8563459 L23.0537208,23.0179683 C23.131055,22.9390752 23.2093662,22.8611436 23.2886348,22.7841931 L23.2147836,22.8563459 C23.2821211,22.7899605 23.3501645,22.7242893 23.4189017,22.6593447 L23.2886348,22.7841931 C23.3852399,22.6904132 23.4832671,22.5980904 23.582681,22.5072602 L23.4189017,22.6593447 C23.4912637,22.5909753 23.5643945,22.523411 23.6382797,22.4566663 L23.582681,22.5072602 C23.6715916,22.4260264 23.7616113,22.3459865 23.8527148,22.2671658 L23.8525967,22.2671923 C23.8915062,22.2336043 23.9304941,22.2002638 23.9696766,22.1671464 L24.00025,22.1417324 Z"/></g></svg>
                {label}
            </button>
        );
    } else if(typeSvg === 'right'){
        return(
            <button className='buttonPrimary'>
                {label}
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" version="1.1" viewBox="0 0 48 48"><title>illustration/colors</title>
                <g id="illustration/colors" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><circle id="Oval" cx="23.763" cy="16.192" r="13.271" fill="#FC521F" opacity=".6"/><circle id="Oval-Copy" cx="15.468" cy="32.308" r="13.271" fill="#66BF3C" opacity=".6"/><path id="Combined-Shape" fill="#FF5F95" d="M15.4683651,19.0362231 C21.5434817,19.0362231 26.6652087,23.1181689 28.2404554,28.6889694 C26.8420385,29.1906678 25.3344184,29.4637769 23.7630101,29.4637769 C17.6878936,29.4637769 12.5661666,25.3818311 10.9909199,19.8110306 C12.3898993,19.3092302 13.8972501,19.0362231 15.4683651,19.0362231 Z"/><circle id="Oval-Copy-2" cx="32.532" cy="32.308" r="13.271" fill="#1EA7FD" opacity=".6"/><path id="Combined-Shape" fill="#87E6E5" d="M24.00025,22.1417324 C26.897967,24.5762286 28.7397972,28.2268506 28.7397972,32.3076552 C28.7397972,36.3884597 26.897967,40.0390817 24.00025,42.4735779 C21.1018087,40.038637 19.2602028,36.3882111 19.2602028,32.3076552 C19.2602028,28.2815316 21.0530043,24.6741393 23.8838362,22.2402492 Z"/><path id="Combined-Shape" fill="#FBD178" d="M32.5316349,19.0362231 C33.9415155,19.0362231 35.3000478,19.2560712 36.5748203,19.6633557 C35.0489179,25.3104816 29.8909911,29.4637769 23.7630101,29.4637769 C22.3527608,29.4637769 20.9938866,29.2438138 19.7188247,28.8363247 C21.2451195,23.1900077 26.403293,19.0362231 32.5316349,19.0362231 Z"/><path id="Combined-Shape" fill="#FFF" d="M24.00025,22.1417324 L24.0124326,22.1519799 C24.1747744,22.288701 24.3337918,22.4292434 24.4893463,22.5734686 L24.3896855,22.4820008 C24.4671836,22.552408 24.5438453,22.6237194 24.619654,22.6959185 L24.4893463,22.5734686 C24.5690639,22.6473803 24.6478719,22.7222591 24.7257519,22.7980864 L24.619654,22.6959185 C24.6907654,22.7636441 24.7611262,22.8321506 24.8307226,22.9014245 L24.7257519,22.7980864 C24.8120661,22.8821258 24.8972403,22.9673303 24.981249,23.0536745 L24.8307226,22.9014245 C24.9073006,22.9776475 24.9829531,23.0547994 25.0576619,23.132862 L25.057852,23.1330605 C25.3140855,23.4007967 25.559391,23.679459 25.7928375,23.9681079 L25.7230574,23.8825538 C25.7985998,23.9743942 25.8729325,24.0672672 25.9460311,24.1611484 L25.7928375,23.9681079 C25.8624256,24.0541514 25.93096,24.1410823 25.998421,24.228881 L25.9460311,24.1611484 C26.0074362,24.2400115 26.0679704,24.319586 26.1276194,24.3998576 L25.998421,24.228881 C26.0663495,24.317288 26.1331896,24.4065749 26.1989214,24.4967216 L26.1276194,24.3998576 C26.204848,24.5037867 26.2805926,24.6088841 26.3548219,24.7151187 L26.1989214,24.4967216 C26.2678555,24.59126 26.3355706,24.6867441 26.4020436,24.7831507 L26.3548219,24.7151187 C26.4130013,24.798383 26.4702498,24.8823459 26.5265523,24.9669921 L26.4020436,24.7831507 C26.4678788,24.8786322 26.5324956,24.9750187 26.5958716,25.0722875 L26.5959296,25.0723765 C26.736338,25.2878741 26.870709,25.5077955 26.9987399,25.7318073 L26.9410662,25.6319089 C26.9973106,25.7283602 27.0523736,25.8255849 27.1062352,25.9235633 L26.9987399,25.7318073 C27.0539848,25.8284676 27.1080492,25.9258895 27.1609136,26.0240532 L27.1606656,26.0235927 C27.2696676,26.2259984 27.3733426,26.4310837 27.4717677,26.6391379 L27.4715275,26.6386302 C27.5541941,26.8133735 27.6329386,26.9896914 27.7079006,27.1679911 C27.7630163,27.299081 27.8161443,27.431391 27.8671831,27.5647345 L27.804312,27.4036517 C27.8391482,27.4912057 27.8730792,27.5792182 27.9060936,27.6676774 L27.8671831,27.5647345 C27.906613,27.6677486 27.9447959,27.7713796 27.9817136,27.8756091 L27.9060936,27.6676774 C27.946474,27.7758735 27.9854831,27.884738 28.0230997,27.9942498 L27.9817136,27.8756091 C28.0144978,27.9681688 28.0462842,28.0612004 28.0770597,28.1546911 L28.0230997,27.9942498 C28.0618265,28.1069941 28.0990774,28.2204244 28.1348294,28.3345177 L28.0770597,28.1546911 C28.1112208,28.2584663 28.1441365,28.3628071 28.175789,28.4676958 L28.1756797,28.4673338 L28.2408136,28.6893554 C28.2284694,28.6937793 28.2161167,28.6981854 28.2037557,28.7025737 L28.2404554,28.6889694 C27.9517707,28.7925384 27.6584322,28.8863659 27.3608394,28.97006 L27.3609965,28.9702524 C27.0695498,29.0519815 26.7741843,29.1241944 26.4751174,29.1863314 L26.5385665,29.1730829 C26.3901218,29.2046704 26.2407589,29.2337757 26.0905233,29.2603535 L26.4751174,29.1863314 C26.3367402,29.215082 26.1975707,29.2416755 26.0576458,29.2660754 L26.0905233,29.2603535 C25.9366833,29.2875689 25.7819282,29.312134 25.6263069,29.334 L26.0576458,29.2660754 C25.9017815,29.2932549 25.7449801,29.3177127 25.5872928,29.3393985 L25.6263069,29.334 C25.493366,29.3526793 25.3597929,29.3693888 25.2256182,29.3840982 L25.5872928,29.3393985 C25.4326976,29.360659 25.277251,29.3792552 25.1210012,29.3951396 L25.2256182,29.3840982 C25.0570566,29.4025774 24.8875455,29.4178998 24.7171453,29.4300052 L25.1210012,29.3951396 C24.9661341,29.4108835 24.810478,29.4239634 24.6540799,29.4343333 L24.7171453,29.4300052 C24.5612618,29.4410793 24.4046342,29.4494611 24.2473088,29.4551045 L24.6540799,29.4343333 C24.5098436,29.4438967 24.3649762,29.4511552 24.2195147,29.4560724 L24.2473088,29.4551045 C24.0865878,29.4608697 23.9251385,29.4637769 23.7630101,29.4637769 L23.3130142,29.4562912 C23.2993121,29.4558347 23.2856153,29.4553574 23.2719237,29.4548593 C22.9596275,29.4434959 22.6502324,29.4213577 22.3439491,29.3888006 L22.3886972,29.3934808 C22.2468147,29.3788837 22.105595,29.3620515 21.9650736,29.3430199 L22.3439491,29.3888006 C22.1914515,29.3725905 22.0397254,29.3537976 21.8888152,29.3324664 L21.9650736,29.3430199 C21.8025527,29.3210088 21.6409661,29.2960557 21.4803691,29.2682161 L21.8888152,29.3324664 C21.7352182,29.3107553 21.5824665,29.2864149 21.4306071,29.2594919 L21.4803691,29.2682161 C21.3506285,29.2457255 21.2215338,29.221351 21.0931142,29.1951218 L21.4306071,29.2594919 C21.2772401,29.2323016 21.1247833,29.2024774 20.973285,29.1700676 L21.0931142,29.1951218 C20.9267071,29.1611338 20.7614335,29.1240315 20.5973571,29.0838786 L20.973285,29.1700676 C20.825476,29.138447 20.6785795,29.1043653 20.5326403,29.0678674 L20.5973571,29.0838786 C20.4596684,29.0501832 20.3228227,29.0143396 20.1868576,28.9763851 L20.5326403,29.0678674 C20.3930822,29.0329653 20.2543997,28.9958536 20.1166319,28.9565718 L20.1169729,28.956669 L19.7188247,28.8363247 L19.7188247,28.8363247 L19.7880988,28.5894836 C19.8166627,28.4914193 19.8463277,28.3938241 19.8770797,28.2967124 L19.8480041,28.389868 C19.888904,28.2573207 19.931824,28.1256601 19.9767281,27.9949221 L19.8770797,28.2967124 C19.9117081,28.1873592 19.9477148,28.0786191 19.9850793,27.9705124 L19.9853117,27.9700125 C20.1152243,27.5939638 20.2618428,27.2250995 20.4240731,26.8647811 L20.345088,27.0439391 C20.3899401,26.9402428 20.4360767,26.8372321 20.4834778,26.7349269 L20.4240731,26.8647811 C20.461061,26.78263 20.4988604,26.7009231 20.5374612,26.6196707 L20.4834778,26.7349269 C20.5344734,26.6248636 20.5869326,26.515617 20.6408302,26.4072119 L20.5374612,26.6196707 C20.5871241,26.5151329 20.6381134,26.4113474 20.6904074,26.308336 L20.6408302,26.4072119 C20.681671,26.3250682 20.7233378,26.2434076 20.7658197,26.1622412 L20.7658807,26.1619302 C20.8435258,26.013775 20.923959,25.866962 21.0070529,25.7218685 C21.2050227,25.3759931 21.4182299,25.0398756 21.6456589,24.7144306 L21.5286537,24.8848257 C21.5876708,24.7975143 21.6476996,24.7109431 21.7087233,24.6251289 L21.6456589,24.7144306 C21.6993229,24.6376387 21.7537788,24.5614411 21.8090146,24.4858495 L21.7087233,24.6251289 C21.7826333,24.5211934 21.8580028,24.4183683 21.9348018,24.3166836 L21.8090146,24.4858495 C21.8722751,24.3992759 21.9365587,24.3134973 22.0018475,24.2285315 L22.0016895,24.2288802 C22.3179789,23.8171232 22.6576794,23.4247699 23.0189296,23.053491 L22.8296293,23.2521975 C22.9033796,23.1732135 22.9780829,23.095131 23.0537208,23.0179683 L23.0189296,23.053491 C23.083529,22.9870982 23.1488175,22.9213793 23.2147836,22.8563459 L23.0537208,23.0179683 C23.131055,22.9390752 23.2093662,22.8611436 23.2886348,22.7841931 L23.2147836,22.8563459 C23.2821211,22.7899605 23.3501645,22.7242893 23.4189017,22.6593447 L23.2886348,22.7841931 C23.3852399,22.6904132 23.4832671,22.5980904 23.582681,22.5072602 L23.4189017,22.6593447 C23.4912637,22.5909753 23.5643945,22.523411 23.6382797,22.4566663 L23.582681,22.5072602 C23.6715916,22.4260264 23.7616113,22.3459865 23.8527148,22.2671658 L23.8525967,22.2671923 C23.8915062,22.2336043 23.9304941,22.2002638 23.9696766,22.1671464 L24.00025,22.1417324 Z"/></g></svg>
            </button>
        );
    } else if(typeSvg === 'only'){
        return(
            <button className='buttonPrimary'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" version="1.1" viewBox="0 0 48 48"><title>illustration/colors</title>
                <g id="illustration/colors" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><circle id="Oval" cx="23.763" cy="16.192" r="13.271" fill="#FC521F" opacity=".6"/><circle id="Oval-Copy" cx="15.468" cy="32.308" r="13.271" fill="#66BF3C" opacity=".6"/><path id="Combined-Shape" fill="#FF5F95" d="M15.4683651,19.0362231 C21.5434817,19.0362231 26.6652087,23.1181689 28.2404554,28.6889694 C26.8420385,29.1906678 25.3344184,29.4637769 23.7630101,29.4637769 C17.6878936,29.4637769 12.5661666,25.3818311 10.9909199,19.8110306 C12.3898993,19.3092302 13.8972501,19.0362231 15.4683651,19.0362231 Z"/><circle id="Oval-Copy-2" cx="32.532" cy="32.308" r="13.271" fill="#1EA7FD" opacity=".6"/><path id="Combined-Shape" fill="#87E6E5" d="M24.00025,22.1417324 C26.897967,24.5762286 28.7397972,28.2268506 28.7397972,32.3076552 C28.7397972,36.3884597 26.897967,40.0390817 24.00025,42.4735779 C21.1018087,40.038637 19.2602028,36.3882111 19.2602028,32.3076552 C19.2602028,28.2815316 21.0530043,24.6741393 23.8838362,22.2402492 Z"/><path id="Combined-Shape" fill="#FBD178" d="M32.5316349,19.0362231 C33.9415155,19.0362231 35.3000478,19.2560712 36.5748203,19.6633557 C35.0489179,25.3104816 29.8909911,29.4637769 23.7630101,29.4637769 C22.3527608,29.4637769 20.9938866,29.2438138 19.7188247,28.8363247 C21.2451195,23.1900077 26.403293,19.0362231 32.5316349,19.0362231 Z"/><path id="Combined-Shape" fill="#FFF" d="M24.00025,22.1417324 L24.0124326,22.1519799 C24.1747744,22.288701 24.3337918,22.4292434 24.4893463,22.5734686 L24.3896855,22.4820008 C24.4671836,22.552408 24.5438453,22.6237194 24.619654,22.6959185 L24.4893463,22.5734686 C24.5690639,22.6473803 24.6478719,22.7222591 24.7257519,22.7980864 L24.619654,22.6959185 C24.6907654,22.7636441 24.7611262,22.8321506 24.8307226,22.9014245 L24.7257519,22.7980864 C24.8120661,22.8821258 24.8972403,22.9673303 24.981249,23.0536745 L24.8307226,22.9014245 C24.9073006,22.9776475 24.9829531,23.0547994 25.0576619,23.132862 L25.057852,23.1330605 C25.3140855,23.4007967 25.559391,23.679459 25.7928375,23.9681079 L25.7230574,23.8825538 C25.7985998,23.9743942 25.8729325,24.0672672 25.9460311,24.1611484 L25.7928375,23.9681079 C25.8624256,24.0541514 25.93096,24.1410823 25.998421,24.228881 L25.9460311,24.1611484 C26.0074362,24.2400115 26.0679704,24.319586 26.1276194,24.3998576 L25.998421,24.228881 C26.0663495,24.317288 26.1331896,24.4065749 26.1989214,24.4967216 L26.1276194,24.3998576 C26.204848,24.5037867 26.2805926,24.6088841 26.3548219,24.7151187 L26.1989214,24.4967216 C26.2678555,24.59126 26.3355706,24.6867441 26.4020436,24.7831507 L26.3548219,24.7151187 C26.4130013,24.798383 26.4702498,24.8823459 26.5265523,24.9669921 L26.4020436,24.7831507 C26.4678788,24.8786322 26.5324956,24.9750187 26.5958716,25.0722875 L26.5959296,25.0723765 C26.736338,25.2878741 26.870709,25.5077955 26.9987399,25.7318073 L26.9410662,25.6319089 C26.9973106,25.7283602 27.0523736,25.8255849 27.1062352,25.9235633 L26.9987399,25.7318073 C27.0539848,25.8284676 27.1080492,25.9258895 27.1609136,26.0240532 L27.1606656,26.0235927 C27.2696676,26.2259984 27.3733426,26.4310837 27.4717677,26.6391379 L27.4715275,26.6386302 C27.5541941,26.8133735 27.6329386,26.9896914 27.7079006,27.1679911 C27.7630163,27.299081 27.8161443,27.431391 27.8671831,27.5647345 L27.804312,27.4036517 C27.8391482,27.4912057 27.8730792,27.5792182 27.9060936,27.6676774 L27.8671831,27.5647345 C27.906613,27.6677486 27.9447959,27.7713796 27.9817136,27.8756091 L27.9060936,27.6676774 C27.946474,27.7758735 27.9854831,27.884738 28.0230997,27.9942498 L27.9817136,27.8756091 C28.0144978,27.9681688 28.0462842,28.0612004 28.0770597,28.1546911 L28.0230997,27.9942498 C28.0618265,28.1069941 28.0990774,28.2204244 28.1348294,28.3345177 L28.0770597,28.1546911 C28.1112208,28.2584663 28.1441365,28.3628071 28.175789,28.4676958 L28.1756797,28.4673338 L28.2408136,28.6893554 C28.2284694,28.6937793 28.2161167,28.6981854 28.2037557,28.7025737 L28.2404554,28.6889694 C27.9517707,28.7925384 27.6584322,28.8863659 27.3608394,28.97006 L27.3609965,28.9702524 C27.0695498,29.0519815 26.7741843,29.1241944 26.4751174,29.1863314 L26.5385665,29.1730829 C26.3901218,29.2046704 26.2407589,29.2337757 26.0905233,29.2603535 L26.4751174,29.1863314 C26.3367402,29.215082 26.1975707,29.2416755 26.0576458,29.2660754 L26.0905233,29.2603535 C25.9366833,29.2875689 25.7819282,29.312134 25.6263069,29.334 L26.0576458,29.2660754 C25.9017815,29.2932549 25.7449801,29.3177127 25.5872928,29.3393985 L25.6263069,29.334 C25.493366,29.3526793 25.3597929,29.3693888 25.2256182,29.3840982 L25.5872928,29.3393985 C25.4326976,29.360659 25.277251,29.3792552 25.1210012,29.3951396 L25.2256182,29.3840982 C25.0570566,29.4025774 24.8875455,29.4178998 24.7171453,29.4300052 L25.1210012,29.3951396 C24.9661341,29.4108835 24.810478,29.4239634 24.6540799,29.4343333 L24.7171453,29.4300052 C24.5612618,29.4410793 24.4046342,29.4494611 24.2473088,29.4551045 L24.6540799,29.4343333 C24.5098436,29.4438967 24.3649762,29.4511552 24.2195147,29.4560724 L24.2473088,29.4551045 C24.0865878,29.4608697 23.9251385,29.4637769 23.7630101,29.4637769 L23.3130142,29.4562912 C23.2993121,29.4558347 23.2856153,29.4553574 23.2719237,29.4548593 C22.9596275,29.4434959 22.6502324,29.4213577 22.3439491,29.3888006 L22.3886972,29.3934808 C22.2468147,29.3788837 22.105595,29.3620515 21.9650736,29.3430199 L22.3439491,29.3888006 C22.1914515,29.3725905 22.0397254,29.3537976 21.8888152,29.3324664 L21.9650736,29.3430199 C21.8025527,29.3210088 21.6409661,29.2960557 21.4803691,29.2682161 L21.8888152,29.3324664 C21.7352182,29.3107553 21.5824665,29.2864149 21.4306071,29.2594919 L21.4803691,29.2682161 C21.3506285,29.2457255 21.2215338,29.221351 21.0931142,29.1951218 L21.4306071,29.2594919 C21.2772401,29.2323016 21.1247833,29.2024774 20.973285,29.1700676 L21.0931142,29.1951218 C20.9267071,29.1611338 20.7614335,29.1240315 20.5973571,29.0838786 L20.973285,29.1700676 C20.825476,29.138447 20.6785795,29.1043653 20.5326403,29.0678674 L20.5973571,29.0838786 C20.4596684,29.0501832 20.3228227,29.0143396 20.1868576,28.9763851 L20.5326403,29.0678674 C20.3930822,29.0329653 20.2543997,28.9958536 20.1166319,28.9565718 L20.1169729,28.956669 L19.7188247,28.8363247 L19.7188247,28.8363247 L19.7880988,28.5894836 C19.8166627,28.4914193 19.8463277,28.3938241 19.8770797,28.2967124 L19.8480041,28.389868 C19.888904,28.2573207 19.931824,28.1256601 19.9767281,27.9949221 L19.8770797,28.2967124 C19.9117081,28.1873592 19.9477148,28.0786191 19.9850793,27.9705124 L19.9853117,27.9700125 C20.1152243,27.5939638 20.2618428,27.2250995 20.4240731,26.8647811 L20.345088,27.0439391 C20.3899401,26.9402428 20.4360767,26.8372321 20.4834778,26.7349269 L20.4240731,26.8647811 C20.461061,26.78263 20.4988604,26.7009231 20.5374612,26.6196707 L20.4834778,26.7349269 C20.5344734,26.6248636 20.5869326,26.515617 20.6408302,26.4072119 L20.5374612,26.6196707 C20.5871241,26.5151329 20.6381134,26.4113474 20.6904074,26.308336 L20.6408302,26.4072119 C20.681671,26.3250682 20.7233378,26.2434076 20.7658197,26.1622412 L20.7658807,26.1619302 C20.8435258,26.013775 20.923959,25.866962 21.0070529,25.7218685 C21.2050227,25.3759931 21.4182299,25.0398756 21.6456589,24.7144306 L21.5286537,24.8848257 C21.5876708,24.7975143 21.6476996,24.7109431 21.7087233,24.6251289 L21.6456589,24.7144306 C21.6993229,24.6376387 21.7537788,24.5614411 21.8090146,24.4858495 L21.7087233,24.6251289 C21.7826333,24.5211934 21.8580028,24.4183683 21.9348018,24.3166836 L21.8090146,24.4858495 C21.8722751,24.3992759 21.9365587,24.3134973 22.0018475,24.2285315 L22.0016895,24.2288802 C22.3179789,23.8171232 22.6576794,23.4247699 23.0189296,23.053491 L22.8296293,23.2521975 C22.9033796,23.1732135 22.9780829,23.095131 23.0537208,23.0179683 L23.0189296,23.053491 C23.083529,22.9870982 23.1488175,22.9213793 23.2147836,22.8563459 L23.0537208,23.0179683 C23.131055,22.9390752 23.2093662,22.8611436 23.2886348,22.7841931 L23.2147836,22.8563459 C23.2821211,22.7899605 23.3501645,22.7242893 23.4189017,22.6593447 L23.2886348,22.7841931 C23.3852399,22.6904132 23.4832671,22.5980904 23.582681,22.5072602 L23.4189017,22.6593447 C23.4912637,22.5909753 23.5643945,22.523411 23.6382797,22.4566663 L23.582681,22.5072602 C23.6715916,22.4260264 23.7616113,22.3459865 23.8527148,22.2671658 L23.8525967,22.2671923 C23.8915062,22.2336043 23.9304941,22.2002638 23.9696766,22.1671464 L24.00025,22.1417324 Z"/></g></svg>
            </button>
        );
    }

    return (
        <button className='buttonPrimary'></button>
    )
};