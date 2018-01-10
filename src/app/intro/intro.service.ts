import { transition } from '@angular/animations';
export class IntroService {
    altText = "Limor Agam Customized Websites";
    images = {
        sketchSrc: "/assets/images/sketch.svg",
        outlineSrc: "/assets/images/outline.svg",
        sigmarSrc: "/assets/images/sigmar.svg"
    };

    sigmarFill = "#a09f9a";
    sigStyle = {size:"200%"};
    sigmarLetters = [
        {letter:"L", style:{transition: '1000ms all ease-in-out'}, d:"M194.504 89.246q-1.377 0-2.005-.013-.575 0-.883-.014l-1.096-.013q-.12 0-.228-.107-.106-.107-.106-.227v-4.226l-.014-1.096q0-.548.027-1.377 0-.174.04-.896v-.308q0-.374.147-.602.067-.12.214-.12.655 0 1.43.027.108.013.308.013.441 0 .655.014h1.03q.267 0 .415.066.24.134.24.616l-.013.107q0 .04-.027.2-.04.2-.04.294 0 .147.04.375.027.16.027.214l.013.08V85.983q0 .107.12.134.04.014.174.014h.976q.362-.014 1.097-.014.147 0 .24.094.094.08.094.174V88.965q0 .107-.107.174-.12.054-.28.067-.174.04-.549.04z"},
        {letter:"I", style:{transition: '100ms 100ms all ease-in-out'}, d:"M198.917 89.26q-.094 0-.174-.067-.08-.08-.12-.201-.054-.24-.08-.535-.014-.093-.014-.254v-.174l.014-1.658q0-.842.04-1.658v-4.225q0-.134.174-.134.922 0 1.377-.013h1.337q.04 0 .067-.014.027-.013.067-.013.174-.027.481-.013.227 0 .481.04.08.053.12.026.027 0 .108-.026.2 0 .307.026.12.027.187.12.067.121.107.295.014.134.014.561V84.151q-.014.107-.014.482 0 .4-.026.628l-.014.602q-.013.2-.013.508l-.013.214v.856q0 .802-.067 1.364 0 .187-.094.374-.24 0-.695.027-.214 0-.281.027H202.019q-.093 0-.093-.027-.107-.027-.12-.027l-.108.054h-1.23q-.013.013-.214.013H199.251z"},
        {letter:"M", style:{transition: '100ms 200ms all ease-in-out'}, d:"M206.491 89.286q-.133 0-.213-.026h-.602l-.602-.148-.053-.107q-.014 0-.014-.147 0-.187-.013-.307l-.014-.615q-.013-.2-.013-.602l-.027-1.03q0-.334.027-.922l.013-.455q.027-.428.027-1.404v-.267q-.027-.04-.027-.147l-.013-.094q0-.334.04-.695.027-.455.027-.83l-.014-.374q-.013-.147-.013-.347 0-.014-.027-.04-.013-.027-.013-.054 0-.134.107-.227.107-.094.267-.134.214-.067.549-.067H209.192q.014 0 .04.027.027.027.054.04.107.094.267.361.04.08.08.187.054.094.134.308.094.214.254.655l.16.414q.108.201.241.575l.08.214q.054.107.094.214.027.094.054.147.04.04.04.054.093.214.2.214.134 0 .214-.214.014-.014.027-.054.013-.053.067-.16l.2-.441.535-1.137.228-.481q.04-.107.053-.174.027-.08.054-.107.053-.12.254-.415.067-.107.12-.16.04-.013.054-.04.013-.027.04-.027H216.84q.026 0 .067.2l.04 1.311q.026.562.026 1.765v.776q0 .454-.04 1.016t-.053.722l-.027.267v.468q.013.188.013.562 0 .401.014.602 0 .387.027.535v.534l-.04.107-.602.147h-.602q-.094.027-.227.027-.24 0-.669-.027l-.334-.013q-.094-.013-.214-.027-.12-.013-.294-.013l-.522-.04q-.026 0-.04.013h-.107q-.067 0-.08-.147-.08-.267-.08-.909 0-.428-.014-.669l-.013-.722q-.013-.24-.013-.695 0-.107-.094-.107-.053 0-.107.134l-.147.36-.12.335-.054.16q-.027.08-.067.148l-.067.16q-.12.268-.307.602-.2.36-.495.575-.16.093-.28.093h-.201q-.16 0-.268-.026H210.29q-.535-.856-1.003-1.872l-.2-.495q-.08-.174-.108-.174-.093 0-.093.107v.629q0 .936-.027 1.377-.027.695-.094.963-.013.173-.08.173h-.093l-.067-.013q-.455.027-.722.053-.16.014-.562.04-.401.027-.749.027z"},
        {letter:"O", style:{transition: '100ms 300ms all ease-in-out'}, d:"M223.495 88.27q.16 0 .254-.2.2-.428.28-1.351.08-.842.08-1.591v-.869q0-.589-.08-1.431-.08-.91-.28-1.377-.107-.228-.254-.228-.294 0-.428.562-.134.775-.134 1.404-.04.535-.04 1.671 0 .762.04 1.257 0 .629.134 1.458.134.695.428.695zm.107 1.297q-1.591 0-2.514-.254-1.284-.334-1.952-1.244-.776-1.083-.776-3.008 0-1.377.308-2.34.307-.963.95-1.578.641-.615 1.644-.896 1.016-.294 2.474-.294 1.136 0 2.139.348 1.23.44 1.912 1.35.842 1.083.842 2.848 0 2.06-.615 3.21-.615 1.056-1.778 1.497-.95.361-2.634.361z"},
        {letter:"R", style:{transition: '100ms 400ms all ease-in-out'}, d:"M235 84.98q.414 0 .654-.414.228-.374.255-.856.026-.28.026-.668v-.147q0-.308-.107-.642-.107-.428-.441-.615-.147-.12-.388-.12-.067 0-.107.16-.12.294-.133.936-.054.267-.054.628l-.013.402q-.027.775-.027 1.283 0 .014.013.027.014.013.027.013l.094.014zm2.192 4.72q-.053 0-.093-.013-.201-.12-.335-.267-.04-.067-.053-.067-.014-.027-.04-.027l-.027-.013-.054-.054-1.136-1.684q-.08-.174-.227-.375-.094-.093-.16-.2-.054-.08-.108-.08-.04 0-.067.04-.013.04-.026.107-.04.36-.04.976 0 .588-.067.949-.04.174-.12.174h-.08q-.028-.014-.054-.014l-.014-.013q-.468.04-1.404.094-.909.053-1.39.053-.134 0-.214-.027H230.828l-.482-.16-.04-.107q0-.013-.013-.054v-.106q0-.08-.027-.295-.067-.815-.054-.641l-.093-1.204-.04-.495q0-.24-.014-.428-.013-.187-.026-.32l-.027-.295q-.04-.548-.04-1.03v-.04q.013-.026.013-.106.027-.08.027-.254l.013-.241.014-.16q0-.281-.027-.816-.053-.334-.053-.856 0-.749.093-1.096.12-.482.401-.482 1.511 0 3.076.04.347 0 1.043.027l.521.013q1.07.027 1.484.027 1.725.08 2.608.87.4.334.588.802.2.468.2 1.002 0 .616-.227 1.137-.187.415-.535.762-.334.334-.762.535.08.04.214.174.054.067.187.174l.188.133q.04.067.093.134.054.054.107.12l.629.776q.428.548.548.802.094.174.094.268 0 .133-.107.24-.107.107-.321.268-.16.12-.375.227-.2.107-.307.2l-.495.268q-.267.147-.575.254-.013 0-.04.014-.014.013-.054.026-.08.04-.44.147-.068.04-.228.067-.04.027-.094.04-.053.014-.08.014h-.067q-.013.067-.053.067h-.04z"},
        {letter:"A", style:{transition: '100ms 500ms all ease-in-out'}, d:"M251.511 85.984l-.094-.656q-.04-.187-.133-.708-.027-.134-.134-.722l-.107-.642q-.04-.268-.08-.468l-.014-.174q-.04-.067-.04-.12l-.013-.08q-.013.026-.013.08 0 .053-.027.066v.054l-.027.174q-.013.093-.04.214-.013.107-.04.24l-.067.375q-.147.842-.174.976-.013.147-.067.441-.026.094-.053.281l-.107.615h.682l.093-.027h.027q.16 0 .24.027.054 0 .094.027.054.013.094.026zm-6.178 3.275q-.173 0-.24-.267-.014-.04-.014-.134 0-.133.054-.4l.04-.268.04-.16q.401-1.886.789-3.317l.936-4.225q0-.027.04-.08.04-.054.094-.067h.067q0 .013.04.013.16 0 .36-.04.201-.04.362-.04.294 0 .548.04.12 0 .267.013.147.014.308.014.053 0 .12-.027H249.693l.32-.013q.094-.014.228-.014.107 0 .107-.013h1.23q.749 0 .99.027.04 0 .106.013.08 0 .094.027.094 0 .187-.014.094-.013.174-.013.187-.04.361-.04.08 0 .16.04t.174.04l.067-.013h.04q.04.026.08.08.054.04.054.067l.936 4.225q.428 1.565.776 3.316 0 .08.053.174.013.094.04.254.027.16.027.268.013.053.013.147 0 .187-.08.307-.053.08-.16.08h-.174q-.2 0-.308-.013h-.949q-.107 0-.107-.013h-.843v-.027q-.053-.027-.133-.027l-.014.013-.013.014q0 .027-.027.027h-.147q-.067-.027-.267-.027-.401-.027-.629-.027-.08-.12-.174-.481-.08-.361-.173-.802-.027-.214-.054-.295-.28.054-.735.054H250.12l-.093.428q-.174.882-.281 1.096-.053 0-.134.027l-.053.027h-.067q-.08 0-.12-.027-.027-.027-.067-.027l-.602.027H248.289q-.054.027-.134.027h-1.404q-.147.013-.602.013h-.348q-.107.013-.307.013z"},
        {letter:"G", style:{transition: '100ms 600ms all ease-in-out'}, d:"M261.285 89.554q-1.043 0-1.872-.482-.936-.454-1.538-1.497-.668-1.177-.668-2.782 0-1.136.401-2.045.401-.91 1.15-1.538.735-.615 1.725-.936.99-.321 2.153-.321 1.711 0 3.53.87l-.522 2.272q-.093-.026-.227-.067-.12-.04-.28-.08-.736-.187-1.084-.24-.32-.054-.521-.054-.843 0-1.284.455-.522.521-.522 1.751 0 1.123.335 1.605.28.454.829.454.347 0 .802-.187 0-.214-.027-.642l-.013-.294q-.014-.307-.014-.909v-.361q0-.12.04-.16.04-.054.148-.054.04.013.227.013h1.417q.629 0 .83-.013.36 0 .467.013.174.04.228.134.067.08.067.268 0 .066.013.12V87q-.013.053-.027.12-.013.067-.013.147v.067q0 .842-.027 1.177-.027.548-.093.695-.348 0-.522.027l-.294.013h-.04q-.12 0-.134-.013-.013-.014-.027-.014v-.013h-.04l-.026.027v.013H264.134q-.04.014-.108.014-.053 0-.093-.08-.094-.241-.107-.576-.027-.16-.054-.468-.12.682-.842 1.057-.655.36-1.645.36z"},
        {letter:"A", style:{transition: '100ms 700ms all ease-in-out'}, d:"M274.859 85.984l-.094-.656q-.04-.187-.134-.708-.026-.134-.133-.722l-.107-.642q-.04-.268-.08-.468l-.014-.174q-.04-.067-.04-.12l-.013-.08q-.014.026-.014.08 0 .053-.026.066v.054l-.027.174q-.014.093-.04.214-.014.107-.04.24l-.067.375q-.147.842-.174.976-.013.147-.067.441-.027.094-.053.281l-.107.615h.682l.093-.027h.027q.16 0 .24.027.054 0 .094.027.054.013.094.026zm-6.178 3.275q-.174 0-.24-.267-.014-.04-.014-.134 0-.133.054-.4l.04-.268.04-.16q.4-1.886.789-3.317l.936-4.225q0-.027.04-.08.04-.054.093-.067h.067q0 .013.04.013.16 0 .361-.04.201-.04.361-.04.295 0 .549.04.12 0 .267.013.147.014.308.014.053 0 .12-.027h.548l.321-.013q.094-.014.227-.014.107 0 .107-.013h1.231q.748 0 .989.027.04 0 .107.013.08 0 .094.027.093 0 .187-.014.093-.013.174-.013.187-.04.36-.04.08 0 .161.04.08.04.174.04l.067-.013h.04q.04.026.08.08.054.04.054.067l.936 4.225q.428 1.565.775 3.316 0 .08.054.174.013.094.04.254.026.16.026.268.014.053.014.147 0 .187-.08.307-.054.08-.16.08h-.175q-.2 0-.307-.013h-.95q-.106 0-.106-.013h-.843v-.027q-.053-.027-.134-.027l-.013.013-.013.014q0 .027-.027.027h-.147q-.067-.027-.268-.027-.4-.027-.628-.027-.08-.12-.174-.481-.08-.361-.174-.802-.026-.214-.053-.295-.281.054-.736.054h-.802l-.094.428q-.173.882-.28 1.096-.054 0-.134.027l-.054.027h-.066q-.08 0-.12-.027-.027-.027-.068-.027l-.601.027H271.637q-.054.027-.135.027H270.1q-.148.013-.602.013h-.348q-.107.013-.308.013z"},
        {letter:"M", style:{transition: '100ms 800ms all ease-in-out'}, d:"M282.306 89.286q-.134 0-.214-.026h-.601l-.602-.148-.054-.107q-.013 0-.013-.147 0-.187-.013-.307l-.014-.615q-.013-.2-.013-.602l-.027-1.03q0-.334.027-.922l.013-.455q.027-.428.027-1.404v-.267q-.027-.04-.027-.147l-.013-.094q0-.334.04-.695.027-.455.027-.83l-.014-.374q-.013-.147-.013-.347 0-.014-.027-.04-.013-.027-.013-.054 0-.134.107-.227.107-.094.267-.134.214-.067.548-.067h3.303q.013 0 .04.027.027.027.054.04.107.094.267.361.04.08.08.187.054.094.134.308.094.214.254.655l.16.414q.107.201.241.575l.08.214q.054.107.094.214.027.094.053.147.04.04.04.054.094.214.201.214.134 0 .214-.214.013-.014.027-.054.013-.053.067-.16l.2-.441.535-1.137.227-.481q.04-.107.054-.174.027-.08.053-.107.054-.12.254-.415.067-.107.12-.16.04-.013.054-.04.014-.027.04-.027H292.655q.027 0 .067.2l.04 1.311q.027.562.027 1.765v.776q0 .454-.04 1.016t-.053.722l-.027.267v.468q.013.188.013.562 0 .401.014.602 0 .387.026.535v.534l-.04.107-.601.147h-.602q-.094.027-.228.027-.24 0-.668-.027l-.334-.013q-.094-.013-.214-.027-.12-.013-.294-.013l-.522-.04q-.027 0-.04.013h-.107q-.067 0-.08-.147-.08-.267-.08-.909 0-.428-.014-.669l-.013-.722q-.014-.24-.014-.695 0-.107-.093-.107-.054 0-.107.134l-.147.36-.12.335-.054.16q-.027.08-.067.148l-.067.16q-.12.268-.307.602-.201.36-.495.575-.16.093-.28.093h-.201q-.161 0-.268-.026h-.562q-.534-.856-1.002-1.872l-.2-.495q-.081-.174-.108-.174-.093 0-.093.107v.629q0 .936-.027 1.377-.027.695-.094.962-.013.174-.08.174h-.094l-.066-.013q-.455.027-.723.053-.16.014-.561.04-.401.027-.749.027z"},

        {letter:"C", style:{transition: '100ms 900ms all ease-in-out'}, d:"M178.324 109.931q-1.22 0-2.032-.11-1.053-.148-1.903-.536l-.333-.167q-.203-.13-.351-.24-.61-.517-.998-1.164-.314-.333-.573-.924-.498-1.293-.498-3.085 0-2.107.868-3.696.758-1.515 2.014-2.365 1.275-.868 2.882-.98l.222-.018h.24q1.442 0 3.104.592.148.073.647.295.499.222.924.5l-.333 2.401-1.09-.277q-.591-.148-1.108-.148-1.035 0-1.552.776-.555.813-.555 2.642 0 .592.056.832.074 1.164.517 1.718.425.48 1.016.48.555 0 1.238-.35.591-.278 1.294-.758l.184 3.03q-.72.665-1.847 1.127-1.072.425-2.033.425z"},
        {letter:"U", style:{transition: '100ms 1000ms all ease-in-out'}, d:"M188.26 109.913q-1.755 0-2.66-.813-.757-.647-1.035-2.07-.184-.942-.184-2.827 0-1.367.147-2.993 0-.259.037-.739.019-.388.037-1.09.019-.72.019-1.257 0-.277-.037-.388-.037-.258-.037-.406 0-.296.628-.296h1.109q1.182-.037 2.272.074.758.074 1.164.167.5.129.666.37.147.276.147.96 0 .831-.018 1.533-.019.684-.037 1.22-.018.13-.018.406 0 .37-.037 1.257-.037 1.626-.037 2.716 0 .684.055.998.055.295.296.295.499 0 1.09-.24.37-.185.517-.277v-7.428q-.055-.425-.055-.831-.037-.111-.037-.314v-.167q0-.332.13-.462.128-.11.609-.11.536 0 1.386-.056.295 0 .813-.037.37 0 .535-.055.111 0 .26.037.22 0 .369.018l.554.019q.406.018 1.016.148l.518.147q.166.056.203.13.055.074.055.185 0 2.734-.11 5.487-.111 3.622-.111 5.47 0 .738-.703.738h-.942q-.37.037-1.349.074-.554.037-.868.037l-.85.037q-.499 0-.758-.166-.258-.166-.35-.573-.998.5-2.107.795-1.109.277-2.291.277z"},
        {letter:"S", style:{transition: '100ms 1100ms all ease-in-out'}, d:"M205.92 109.931q-1.311 0-2.642-.295-1.312-.314-2.162-.85-.221-.665-.332-1.33-.111-.666-.277-1.904v-.055q.037-.222.24-.333.702.425 1.349.647.646.203 1.422.203h.444l.295.019q.425 0 .869-.13.24-.092.332-.35l-.979-.481q-1.127-.536-2.032-1.146-.943-.683-1.35-1.737-.202-.572-.202-1.256 0-1.663 1.016-2.68.887-.905 2.402-1.293 1.312-.314 2.882-.314.924 0 2.55.204.166.037.462.074l.554.11q.629.111.924.111.019 0 .056.056l.092.092q.074.13.148.13h.037l.037.387q0 .278.055.592.056.462.056.997 0 .462-.056.666-.092.37-.332.535l-1.719-.221h-.444q-.627 0-1.44.13l-.61.128q-.222.037-.222.074 0 .444.573.832.277.148.554.258.277.093.351.13 1.368.388 2.365 1.349.462.443.721.942.259.499.259.96 0 .278-.074.592-.13 1.386-1.053 2.402-.906.905-2.273 1.33-1.183.425-2.846.425z"},
        {letter:"T", style:{transition: '100ms 1200ms all ease-in-out'}, d:"M217.112 109.506q-.259 0-.388-.35-.277-.61-.277-2.218 0-1.552.055-3.566.019-.647.019-1.996l-.056-.073h-2.05q-.24 0-.389-.26-.129-.276-.203-.757-.092-.554-.092-1.589v-.258q0-.185.018-.296V97.7q0-.111.111-.185.11-.093.259-.13.184-.055.554-.055h1.404q.462 0 .702.019l.684.018h6.652q.72 0 .942.019.092.018.259.037.166.018.24.073.13.056.148.148.037.074.037.24v3.05q0 .202-.167.276-.11.037-.295.037h-1.201q-.425 0-.647-.037h-.554q-.167 0-.185.074 0 .019-.019.056-.018.018-.018.055v.905q0 .278-.018.425 0 .536-.074 2.347l-.037.554q-.037.776-.074 1.127v1.756q0 .628-.259.794-.24.093-.333.111l-.462.018q-.72 0-1.016.037l-1.94.019q-.37.018-1.33.018z"},
        {letter:"O", style:{transition: '100ms 1300ms all ease-in-out'}, d:"M234.326 108.139q.222 0 .351-.277.277-.591.388-1.866.111-1.164.111-2.2v-1.2q0-.813-.11-1.977-.112-1.257-.389-1.903-.148-.314-.35-.314-.407 0-.592.776-.185 1.071-.185 1.94-.055.739-.055 2.31 0 1.053.055 1.736 0 .869.185 2.014.185.961.591.961zm.148 1.792q-2.199 0-3.474-.35-1.773-.463-2.697-1.72-1.072-1.496-1.072-4.156 0-1.904.425-3.234t1.312-2.18q.887-.85 2.273-1.238 1.404-.407 3.418-.407 1.57 0 2.956.48 1.7.61 2.642 1.867 1.164 1.497 1.164 3.935 0 2.846-.85 4.435-.85 1.46-2.457 2.07-1.312.498-3.64.498z"},
        {letter:"M", style:{transition: '100ms 1400ms all ease-in-out'}, d:"M245.475 109.543q-.185 0-.296-.037h-.832l-.83-.203-.075-.148q-.018 0-.018-.203 0-.259-.019-.425l-.018-.85q-.019-.277-.019-.831l-.037-1.423q0-.462.037-1.275l.019-.628q.037-.592.037-1.94v-.37q-.037-.055-.037-.203l-.019-.13q0-.461.056-.96.037-.629.037-1.146l-.019-.517q-.018-.203-.018-.48 0-.02-.037-.056-.019-.037-.019-.074 0-.185.148-.314.148-.13.37-.185.295-.092.757-.092H249.206q.02 0 .056.037.037.037.074.055.148.13.37.5.055.11.11.258.075.13.185.425.13.295.351.905l.222.573q.148.277.333.794l.11.296q.075.148.13.296.037.129.074.203.055.055.055.074.13.295.277.295.185 0 .296-.295.019-.019.037-.074.019-.074.092-.222l.278-.61.739-1.57.314-.665q.055-.148.074-.24.037-.111.074-.148.073-.167.35-.573.093-.148.167-.222.055-.018.074-.055.018-.037.055-.037h5.673q.037 0 .092.277l.055 1.81q.037.777.037 2.44v1.071q0 .629-.055 1.405t-.074.997l-.037.37v.647q.019.258.019.776 0 .554.018.831 0 .536.037.74v.738l-.055.148-.832.203h-.831q-.13.037-.314.037-.333 0-.924-.037l-.462-.018q-.13-.019-.296-.037-.166-.019-.406-.019l-.72-.055q-.038 0-.056.018h-.148q-.092 0-.11-.203-.112-.37-.112-1.256 0-.592-.018-.924l-.019-.998q-.018-.332-.018-.96 0-.149-.13-.149-.073 0-.147.185l-.203.5-.167.461-.074.222q-.037.11-.092.203l-.092.222q-.167.37-.425.831-.278.5-.684.795-.222.13-.388.13h-.277q-.222 0-.37-.038h-.776q-.739-1.182-1.386-2.587l-.277-.683q-.11-.24-.148-.24-.129 0-.129.147v.869q0 1.293-.037 1.903-.037.96-.13 1.33-.018.24-.11.24h-.13l-.092-.018q-.628.037-.998.074-.221.018-.776.055-.554.037-1.034.037z"},
        {letter:"I", style:{transition: '100ms 1500ms all ease-in-out'}, d:"M262.651 109.506q-.129 0-.24-.092-.11-.111-.166-.277-.074-.333-.111-.74-.019-.129-.019-.35v-.24l.019-2.292q0-1.164.055-2.29v-5.84q0-.184.24-.184 1.275 0 1.904-.019h1.847q.056 0 .093-.018.037-.019.092-.019.24-.037.665-.018.314 0 .666.055.11.074.166.037.037 0 .148-.037.277 0 .425.037.166.037.258.166.093.167.148.407.019.185.019.776V102.448q-.019.148-.019.665 0 .554-.037.869l-.018.831q-.019.277-.019.702l-.018.296v1.182q0 1.109-.093 1.885 0 .259-.13.517-.332 0-.96.037-.296 0-.388.037h-.24q-.13 0-.13-.037-.147-.037-.166-.037l-.148.074h-1.7q-.018.019-.295.019H263.113z"},
        {letter:"Z", style:{transition: '100ms 1600ms all ease-in-out'}, d:"M277.201 109.488q-1.884 0-2.753-.019-.831 0-1.256-.018l-1.478-.019q-.185 0-.333-.148-.166-.166-.166-.314v-3.418q1.238-1.164 1.995-2.032.462-.425.869-.906.425-.48.517-.591.37-.443.444-.591.184-.24.184-.351 0-.074-.092-.074l-3.51-.074q-.315 0-.518-.425-.092-.259-.166-.96-.037-.296-.037-.85 0-.167.018-.296 0-.278.019-.425 0-.296.037-.407v-.185l.092-.092q.148-.148.37-.148.129 0 .221.037l.204.019q.665 0 1.367-.056.665-.055 1.349-.055 1.755 0 2.623-.037l2.68-.019q1.034 0 1.589.111.24.093.314.148.055.11.055.13v2.956q0 .166-.13.59-.147.389-.553.98-.813 1.257-3.234 3.788.813 0 1.201-.019h2.143q.167 0 .314.13.148.11.148.24V109.118q0 .13-.129.222-.166.074-.407.092-.221.056-.757.056z"},
        {letter:"E", style:{transition: '100ms 1700ms all ease-in-out'}, d:"M285.481 109.488q-.092 0-.277-.019-.185-.037-.443-.055l-.388-.092q-.093-.019-.148-.037-.037-.037-.019-.056 0-.48-.055-1.275 0-.277-.019-.48-.018-.222-.037-.37l-.036-.794q0-.314-.037-.795l-.019-.573q0-.702-.018-1.09-.019-.388-.019-1.626 0-1.164.019-2.402.018-1.238.11-2.346 0-.203.444-.333.277-.037.924-.037 1.496 0 2.199-.055 2.18-.037 3.288-.037h.813q1.516.037 2.329.11.295 0 .425.703.055.13.129.665.055.277.148.684.018.11 0 .221v.111q-.019.185-.204.185-.073-.019-.221-.019-.776 0-1.903.13l-.98.074q-.61.074-.96.092-.056 0-.148.222-.074.24-.167 1.108l-.037.462q0 .24.056.314.055.056.24.056h1.645q.72 0 1.644.092h.222q.24.056.295.185.074.11.093.24l.074 1.645v.055q0 .314-.666.37-.388.092-1.478.092-.942 0-1.22-.018-.535 0-.646.018-.203.055-.259.222-.055.148-.055.517 0 .24-.037.684-.018.221-.018.702 1.2 0 1.773-.037.629-.055 1.774-.055.074 0 .148.129.092.185.296.831.11.37.221.924.037.13.037.277 0 .388-.37.388-.48 0-1.293.037-.425.037-1.33.037-1.94 0-2.92.019z"},
        {letter:"D", style:{transition: '100ms 1800ms all ease-in-out'}, d:"M302.782 107.03q.074.019.204.019.147 0 .406-.037.093-.019.13-.037.055-.037.092-.055.222-.26.425-1.09.13-.518.314-1.774.092-1.072.092-1.848v-.351q0-.48-.092-1.441-.13-.961-.37-1.35-.203-.258-.37-.258-.165 0-.295.037-.13.037-.166.056-.037.018-.166.092l-.019 2.217q0 .296-.037.887l-.018.444q-.037.923-.037 1.33zm-2.586 2.458l-2.827-.019q-.314 0-.407-.406-.092-.259-.092-.74 0-1.607-.037-2.863-.056-1.81-.056-3.825V97.57q0-.166.148-.314.166-.166.333-.166l2.143.018q.61.019 1.534.019 1.385 0 2.161-.019l.684-.018q1.146-.037 1.81-.037 1.146 0 2.218.443 1.256.48 2.014 1.645.905 1.404.905 3.455 0 1.94-.443 3.233-.425 1.294-1.367 2.125-.943.813-2.476 1.183-1.515.37-3.806.37z"},

        {letter:"W", style:{transition: '100ms 1900ms all ease-in-out'}, d:"M193.59 128.492q-.589 0-.846-.018h-2.023q-.147 0-.294-.055-.184-.056-.33-.056l-.166.019q-.184-.055-.184-.202l-1.287-5.828q-.496-2.482-.882-4.542-.092-.073-.166-.478-.018-.22-.018-.68 0-.239.073-.386.092-.165.258-.165H188.405q.129.036.46.036l.827.019h.937l.11.018q.02.019.038.019h.018l.018.036q.019 0 .037-.018.037-.018.074-.018.11-.037.147-.037h.055l.165.018q.203.019.79.019.185.036.424.036.092.166.184.57.11.405.22.901.037.276.184 1.158.055.276.129.7l.11.587q0 .019.019.074.018.037.018.11l.055.368q.037.147.074.46.036.091.055.239.018.128.037.22l.036.184q.019.074.019.165l.037.166.018.073q0 .056.037.092v.11l.037-.11v-.092l.018-.073q0-.055.037-.166 0-.128.055-.349.037-.11.055-.22.019-.13.037-.24l.073-.46q.037-.11.056-.22.018-.11.018-.147l.018-.184q.534-2.776.754-3.53.019-.11.055-.202.055-.11.166-.165.018-.037.11-.055.11-.019.166-.037.386-.055.551-.055H196.79l.643.018q.166.018.386.018h.056l.018-.018.018-.018q.074 0 .092.036.037 0 .037.019h.018q.331.018.773.018.183.019.386.019.165 0 .184.036.018 0 .055-.018.037-.018.073-.018.037-.037.184-.037h.331q.294 0 .35.073.146.552.238 1.38l.056.404q.147 1.048.312 1.765l.037.22q.055.386.055.478.018.184.092.589.037.422.092.588 0 .202.037.46.018.091.036.147.019.036.019.055 0 .092.018.165l.019.11q.036-.091.055-.11v-.165l.018-.202.074-.46.091-.588q.019-.24.092-.589l.055-.478q.019-.092.019-.147.018-.055.018-.073.11-.515.147-.772l.074-.387q.257-1.36.423-1.875.055-.312.184-.515.11 0 .239-.018.128-.018.257-.018.147 0 .33-.037h.038q.055 0 .055.037v.018q0 .018.018.018.074 0 .11-.018.037-.018.056-.018l.018-.037H204.897q.202 0 .349-.019h.46q.349 0 .478-.036h.698q.147 0 .22.165.093.166.093.386-.092.24-.166.68-.018.203-.018.478-.607 2.85-1.232 5.093l-1.287 5.277q-.165.036-.184.11v.092l-.184-.019q-.147 0-.22.019l-.22.018h-.92q-.717 0-1.066-.018h-2.482q-.184-.019-.515-.019l-.184.019q-.184-.055-.184-.202l-1.232-6.067-1.213 6.067q-.092.294-.588.294h-.864q-.24.018-.846.018z"},
        {letter:"E", style:{transition: '100ms 2000ms all ease-in-out'}, d:"M210.594 128.474q-.092 0-.276-.019-.183-.036-.44-.055l-.387-.092q-.092-.018-.147-.036-.037-.037-.018-.056 0-.478-.055-1.268 0-.276-.019-.478-.018-.22-.037-.368l-.036-.79q0-.313-.037-.791l-.019-.57q0-.699-.018-1.085t-.018-1.618q0-1.158.018-2.39.018-1.231.11-2.334 0-.203.442-.331.275-.037.919-.037 1.489 0 2.188-.055 2.169-.037 3.272-.037h.81q1.507.037 2.316.11.294 0 .422.699.056.128.13.662.054.275.146.68.019.11 0 .22v.11q-.018.185-.202.185-.073-.019-.22-.019-.773 0-1.894.129l-.975.073q-.606.074-.956.092-.055 0-.147.221-.073.239-.165 1.103l-.037.46q0 .239.055.312.055.055.24.055h1.635q.717 0 1.637.092h.22q.24.056.294.184.074.11.092.24l.074 1.635v.056q0 .312-.662.367-.386.092-1.47.092-.938 0-1.214-.018-.533 0-.644.018-.202.055-.257.22-.055.148-.055.516 0 .239-.037.68-.018.22-.018.699 1.195 0 1.765-.037.625-.055 1.765-.055.073 0 .147.128.092.184.294.828.11.367.22.919.037.129.037.276 0 .386-.367.386-.478 0-1.287.036-.423.037-1.324.037-1.93 0-2.905.019z"},
        {letter:"B", style:{transition: '100ms 2100ms all ease-in-out'}, d:"M228.085 125.642q.018 0 .018-.018 1.287-.625 2.924-1.36.073-.074.092-.074l.092-.055q-.773-.24-1.526-.313-.956-.036-1.582-.036-.202 0-.202.257v1.47q0 .13.147.13zm.276-5.313q.092 0 .202-.055.478-.165.901-.405.257-.11.496-.22.258-.129.35-.166l.165-.073.147-.037q.074 0 .074-.092 0-.312-.68-.423-.405-.092-1.012-.092-.551 0-.698.423-.092.22-.092.552v.496q0 .092.147.092zm-2.188 8.586q-1.305 0-2.096-.074-.772-.055-1.232-.22-.478-.202-.698-.552-.22-.349-.22-.937v-.46q.017-.184.017-.551.019-.184.019-.552.018-.184.018-.386 0-.699-.037-2.096l-.018-1.103q-.092-1.305-.092-3.162V117.627q0-.644.055-.938.037-.092.037-.166.019-.073.019-.11.018-.33.275-.496.147-.055.405-.055.165 0 .35-.019.201-.018.422-.018.294 0 .92-.037.165-.018.385-.037.24-.018.534-.018.588-.037.827-.037 1.507 0 3.53.294 1.415.166 2.206.35 1.342.33 2.04.864.902.772.902 1.967 0 1.544-1.269 2.335-.092.055-.165.092-.074.018-.148.055-.33.092-.57.239-.036.018-.091.073-.056.037-.092.11v.02q.018 0 .018.017l.037.037q1.269.515 2.06 1.269.587.662.587 1.379 0 1.01-1.231 2.04-1.214.956-2.997 1.453-1.324.368-2.61.515-.975.11-2.097.11z"},
        {letter:"S", style:{transition: '100ms 2200ms all ease-in-out'}, d:"M242.027 128.915q-1.306 0-2.63-.294-1.305-.313-2.15-.846-.221-.662-.331-1.324-.11-.661-.276-1.893v-.055q.037-.221.239-.331.699.422 1.342.643.643.202 1.416.202h.44l.295.019q.423 0 .864-.129.24-.092.331-.35l-.974-.477q-1.122-.533-2.023-1.14-.937-.68-1.342-1.728-.202-.57-.202-1.25 0-1.655 1.011-2.666.883-.901 2.39-1.287 1.306-.313 2.868-.313.92 0 2.537.202.166.037.46.074l.552.11q.625.11.919.11.018 0 .055.056l.092.091q.073.13.147.13h.037l.037.385q0 .276.055.589.055.46.055.992 0 .46-.055.662-.092.368-.331.533l-1.71-.22h-.441q-.625 0-1.434.128l-.607.13q-.22.036-.22.073 0 .44.57.827.275.147.55.257.277.092.35.13 1.36.385 2.353 1.341.46.441.717.938.258.496.258.956 0 .276-.074.588-.128 1.379-1.048 2.39-.9.901-2.261 1.324-1.177.423-2.831.423z"},
        {letter:"I", style:{transition: '100ms 2300ms all ease-in-out'}, d:"M250.717 128.492q-.128 0-.239-.092-.11-.11-.165-.276-.074-.33-.11-.735-.019-.129-.019-.35v-.238l.019-2.28q0-1.158.055-2.28v-5.81q0-.183.239-.183 1.268 0 1.893-.019h1.839q.055 0 .092-.018.037-.019.092-.019.239-.036.662-.018.312 0 .662.055.11.074.165.037.037 0 .147-.037.276 0 .423.037.165.037.257.166.092.165.147.404.019.184.019.772V121.47q-.019.147-.019.662 0 .551-.036.864l-.019.827q-.018.276-.018.699l-.019.294v1.177q0 1.103-.091 1.875 0 .257-.13.515-.33 0-.955.037-.294 0-.386.036h-.239q-.129 0-.129-.036-.147-.037-.166-.037l-.147.073h-1.691q-.018.019-.294.019h-1.379z"},
        {letter:"T", style:{transition: '100ms 2400ms all ease-in-out'}, d:"M261.996 128.492q-.257 0-.386-.35-.276-.606-.276-2.205 0-1.545.055-3.549.019-.643.019-1.985l-.055-.074h-2.041q-.24 0-.386-.257-.129-.276-.203-.754-.091-.552-.091-1.581v-.257q0-.184.018-.295V116.744q0-.11.11-.184.11-.092.258-.128.184-.056.551-.056h1.397q.46 0 .7.019l.68.018h6.618q.717 0 .938.019.092.018.257.036.165.019.239.074.129.055.147.147.037.074.037.24v3.033q0 .202-.166.275-.11.037-.294.037H268.927q-.423 0-.643-.037h-.552q-.165 0-.184.074 0 .018-.018.055-.018.018-.018.055v.901q0 .276-.019.423 0 .533-.073 2.335l-.037.551q-.037.773-.074 1.122v1.747q0 .625-.257.79-.239.092-.331.11l-.46.019q-.717 0-1.01.037l-1.931.018q-.368.018-1.324.018z"},
        {letter:"E", style:{transition: '100ms 2500ms all ease-in-out'}, d:"M273.793 128.474q-.092 0-.276-.019-.184-.036-.441-.055l-.386-.092q-.092-.018-.147-.036-.037-.037-.019-.056 0-.478-.055-1.268 0-.276-.018-.478-.019-.22-.037-.368l-.037-.79q0-.313-.037-.791l-.018-.57q0-.699-.018-1.085-.019-.386-.019-1.618 0-1.158.019-2.39.018-1.231.11-2.334 0-.203.441-.331.276-.037.92-.037 1.489 0 2.187-.055 2.17-.037 3.273-.037h.809q1.507.037 2.316.11.294 0 .423.699.055.128.129.662.055.275.147.68.018.11 0 .22v.11q-.019.185-.202.185-.074-.019-.221-.019-.772 0-1.894.129l-.974.073q-.607.074-.956.092-.055 0-.147.221-.074.239-.166 1.103l-.036.46q0 .239.055.312.055.055.239.055h1.636q.717 0 1.636.092h.22q.24.056.295.184.074.11.092.24l.073 1.635v.056q0 .312-.661.367-.386.092-1.471.092-.938 0-1.214-.018-.533 0-.643.018-.202.055-.257.22-.056.148-.056.516 0 .239-.036.68-.019.22-.019.699 1.195 0 1.765-.037.625-.055 1.765-.055.074 0 .147.128.092.184.294.828.11.367.22.919.038.129.038.276 0 .386-.368.386-.478 0-1.287.036-.423.037-1.324.037-1.93 0-2.904.019z"},
        {letter:"S", style:{transition: '100ms 2600ms all ease-in-out'}, d:"M290.144 128.915q-1.305 0-2.63-.294-1.304-.313-2.15-.846-.22-.662-.331-1.324-.11-.661-.276-1.893v-.055q.037-.221.24-.331.698.422 1.341.643.644.202 1.416.202h.441l.294.019q.423 0 .864-.129.24-.092.331-.35l-.974-.477q-1.122-.533-2.022-1.14-.938-.68-1.343-1.728-.202-.57-.202-1.25 0-1.655 1.011-2.666.883-.901 2.39-1.287 1.306-.313 2.868-.313.92 0 2.538.202.165.037.46.074l.55.11q.626.11.92.11.018 0 .055.056l.092.091q.074.13.147.13h.037l.037.385q0 .276.055.589.055.46.055.992 0 .46-.055.662-.092.368-.33.533l-1.71-.22h-.442q-.625 0-1.434.128l-.607.13q-.22.036-.22.073 0 .44.57.827.275.147.551.257.276.092.35.13 1.36.385 2.353 1.341.46.441.717.938.257.496.257.956 0 .276-.073.588-.129 1.379-1.048 2.39-.901.901-2.262 1.324-1.176.423-2.83.423z"},
    ];

    clickStyle = {opacity:0};
}