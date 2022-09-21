import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/Navbar'
import {IoFlameSharp} from "react-icons/io5"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <div>
         <div className={styles.homeAuth}>
<span>Log-In</span>
<span className={styles.homeAuthSign}>Sign Up</span>
         </div>
         <div>

          <div>
            <svg className={styles.undraw1} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="240.175" height="175.5" viewBox="0 0 739 468" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M853.24364,705.75529l2-.03906a463.83054,463.83054,0,0,0-7.09961-66.28711c-8.64843-46.88086-23.02929-77.66993-42.74316-91.51172l-1.14844,1.63672C850.30419,581.8881,853.22021,704.51994,853.24364,705.75529Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><path d="M828.24364,705.27677l2-.03906c-.043-2.21484-1.293-54.41406-21.84277-68.8418l-1.14844,1.63672C826.97314,651.87834,828.23388,704.74455,828.24364,705.27677Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><circle cx="551.49821" cy="301.31307" r="10.00001" fill="#6c63ff"/><circle cx="556.45036" cy="387.31309" r="10" fill="#6c63ff"/><path d="M832.90487,555.73032c-1.87935,12.004,3.0189,22.74061,3.0189,22.74061s7.9453-8.72583,9.82465-20.72986-3.01891-22.7406-3.01891-22.7406S834.78423,543.7263,832.90487,555.73032Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><path d="M800.2177,584.88413c11.493,3.9422,22.91878.98963,22.91878.98963s-7.20793-9.34412-18.70088-13.28632-22.91879-.98962-22.91879-.98962S788.72475,580.94193,800.2177,584.88413Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><path d="M799.84846,661.04527a31.13456,31.13456,0,0,0,16.06421.69366,28.37373,28.37373,0,0,0-29.172-10.00629A31.13421,31.13421,0,0,0,799.84846,661.04527Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><path d="M566.4728,393.61993,502.0001,360.0942s-21.65069-23.84322-35.24783-34.61282-17.7827-2.85791-17.7827-2.85791l-5.71575,9.52636,13.81324,19.21174,37.3119,31.59606,66.66975,26.1135a10.572,10.572,0,1,0,5.42409-15.4512Z" transform="translate(-241.37629 -238.42268)" fill="#9f616a"/><path d="M398.77329,364.6245l-3.81708-23.35225-10.778-2.69445s-8.5538-2.63477-10.55317,14.59512-.44926,49.39894-.44926,49.39894l-21.88282,69.29535a10.59585,10.59585,0,1,0,14.7613,7.09018l28.6776-65.60761Z" transform="translate(-241.37629 -238.42268)" fill="#9f616a"/><polygon points="246.545 453.915 260.648 453.914 267.358 399.515 246.542 399.516 246.545 453.915" fill="#9f616a"/><path d="M484.32357,687.733l27.7751-.00113h.00112a17.70143,17.70143,0,0,1,17.70047,17.70019v.57519l-45.47584.00169Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><polygon points="92.716 453.915 106.82 453.914 113.529 399.515 92.714 399.516 92.716 453.915" fill="#9f616a"/><path d="M330.49508,687.733l27.7751-.00113h.00112a17.70142,17.70142,0,0,1,17.70046,17.70019v.57519l-45.47584.00169Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><path d="M403.71931,317.97643l-23.39272,19.96935,19.19785,60.7527,4.33173,13.56614s-26.45012,24.38714-42.81585,92.5121-43.13826,158.64663-43.13826,158.64663l56.51213,16.17685L420.3905,525.49444l54.07908,120.90065,6.2437,35.75935,48.12555-14.19022-11.35218-89.68217-56.76087-155.241,5.89612-41.15164s8.85413-20.54034-6.5275-42.28684l-4.82467-20.43392-17.28336-4.25706Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><path d="M442.58173,307.12036H379.33625a4.91252,4.91252,0,0,1-4.907-4.907v-27.261a36.52972,36.52972,0,0,1,73.05944,0v27.261A4.91252,4.91252,0,0,1,442.58173,307.12036Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><circle cx="418.46547" cy="279.70344" r="26.78231" transform="translate(-269.05901 274.30256) rotate(-61.3368)" fill="#9f616a"/><path d="M456.13076,277.6785H417.4577l-.39667-5.5523-1.98281,5.5523H409.1234l-.78589-11.00449-3.92994,11.00449h-11.5223v-.54522a28.92911,28.92911,0,0,1,28.89638-28.89665h5.45246a28.92933,28.92933,0,0,1,28.89665,28.89665Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><path d="M417.14119,312.20917a5.01187,5.01187,0,0,1-.86841-.07667l-28.31815-4.99643V260.3345h31.17283l-.77177.89983c-10.73774,12.523-2.6481,32.82925,3.12969,43.81883a4.83436,4.83436,0,0,1-.38416,5.13274A4.88728,4.88728,0,0,1,417.14119,312.20917Z" transform="translate(-241.37629 -238.42268)" fill="#2f2e41"/><path d="M651.33014,557.56836,403.14905,645.3151a24.56673,24.56673,0,0,1-31.3153-14.95575l-42.634-120.58516a24.56674,24.56674,0,0,1,14.95574-31.3153l248.18109-87.74674a24.56674,24.56674,0,0,1,31.31531,14.95575l42.634,120.58516A24.56674,24.56674,0,0,1,651.33014,557.56836Z" transform="translate(-241.37629 -238.42268)" fill="#fff"/><path d="M666.28589,526.25306l.22556.638A23.43487,23.43487,0,0,1,652.224,556.7949L402.802,644.98037a23.43325,23.43325,0,0,1-29.90121-14.28054l-.22556-.638Z" transform="translate(-241.37629 -238.42268)" fill="#f2f2f2"/><path d="M387.66123,506.4563c-16.45068,10.82463-37.53445,2.67823-44.90812-9.18765l1.1756-.668C357.93373,487.87106,378.73225,492.73472,387.66123,506.4563Z" transform="translate(-241.37629 -238.42268)" fill="#6c63ff"/><path d="M593.81186,537.16748c-4.02657,1.42363-7.652,1.35832-10.77693-.19413-7.06267-3.50917-10.37681-13.91434-13.03981-22.27525-.77484-2.43225-1.50665-4.7299-2.25186-6.60766l-.01067-.02855a14.97351,14.97351,0,0,1,9.07371-19.01164l33.38227-11.80262c4.02143-1.42181,7.643-1.35706,10.76531.19286,7.06092,3.50478,10.37781,13.90628,13.04317,22.264.77716,2.4372,1.51123,4.73944,2.25914,6.6201a14.98288,14.98288,0,0,1-9.07011,19.04308ZM569.13122,507.5562c.76229,1.92294,1.5,4.2389,2.28081,6.69062,2.57783,8.09332,5.78611,18.16585,12.28461,21.39462,2.78927,1.38574,5.93592,1.42625,9.61931.124l33.37233-11.7991a13.48617,13.48617,0,0,0,8.17505-17.12113c-.75629-1.9-1.498-4.22613-2.2833-6.689-2.58-8.09024-5.79087-18.15914-12.28746-21.3836-2.78646-1.38327-5.92989-1.42337-9.60814-.12289l-33.38034,11.80193A13.48267,13.48267,0,0,0,569.13122,507.5562Z" transform="translate(-241.37629 -238.42268)" fill="#3f3d56"/><path d="M380.74224,510.354a33.179,33.179,0,0,1-18.23869,1.00256c-8.84066-1.94125-16.86391-7.21969-20.93832-13.7745l-.40839-.657,1.83484-1.04308c14.21571-8.85452,35.53266-4.05419,44.73394,10.08245l.40344.61988-.61776.40674A31.21918,31.21918,0,0,1,380.74224,510.354Zm-37.4934-12.90734c3.98747,5.92469,11.40744,10.66391,19.57373,12.45732a30.99955,30.99955,0,0,0,23.23925-3.75028c-9.00057-13.01914-28.94151-17.3378-42.29584-9.00152Z" transform="translate(-241.37629 -238.42268)" fill="#3f3d56"/><path d="M389.46138,596.90244a12.3428,12.3428,0,0,1-12.55072-2.0841,15.43877,15.43877,0,0,1-5.05061-14.27088,12.38646,12.38646,0,0,1,8.69877-9.60283l44.47892-15.72594a12.40825,12.40825,0,0,1,12.7924,2.0129,15.43853,15.43853,0,0,1,5.04415,14.27088c-.87831,4.58992-3.97714,7.9712-8.70064,9.58963L389.6939,596.81833Q389.5775,596.86121,389.46138,596.90244Zm-8.62591-24.48012a10.93106,10.93106,0,0,0-7.51452,8.40389,13.90851,13.90851,0,0,0,4.55026,12.85649,10.94121,10.94121,0,0,0,11.31642,1.73717l44.50084-15.73368a10.95848,10.95848,0,0,0,7.72506-8.46331,13.90705,13.90705,0,0,0-4.54468-12.85654,10.98845,10.98845,0,0,0-11.32542-1.749L381.03984,572.352c-.06831.023-.13685.04645-.20439.07034Z" transform="translate(-241.37629 -238.42268)" fill="#3f3d56"/><path d="M594.10935,501.6884l-14.02153,4.95745a3.718,3.718,0,1,1-2.47873-7.01077l14.02153-4.95744a3.718,3.718,0,1,1,2.47873,7.01076Z" transform="translate(-241.37629 -238.42268)" fill="#6c63ff"/><path d="M598.0753,512.90563l-14.02153,4.95744a3.718,3.718,0,1,1-2.47872-7.01076l14.02153-4.95745a3.718,3.718,0,0,1,2.47872,7.01077Z" transform="translate(-241.37629 -238.42268)" fill="#6c63ff"/><path d="M602.04125,524.12285l-14.02153,4.95745a3.718,3.718,0,0,1-2.47872-7.01077l14.02153-4.95744a3.718,3.718,0,1,1,2.47872,7.01076Z" transform="translate(-241.37629 -238.42268)" fill="#6c63ff"/><path d="M618.647,493.01288l-14.02153,4.95744a3.718,3.718,0,1,1-2.47872-7.01076l14.02153-4.95744a3.718,3.718,0,1,1,2.47872,7.01076Z" transform="translate(-241.37629 -238.42268)" fill="#6c63ff"/><path d="M622.613,504.2301l-14.02153,4.95745a3.718,3.718,0,1,1-2.47872-7.01077l14.02153-4.95744a3.718,3.718,0,0,1,2.47872,7.01076Z" transform="translate(-241.37629 -238.42268)" fill="#6c63ff"/><path d="M626.57893,515.44733l-14.02153,4.95744a3.718,3.718,0,1,1-2.47872-7.01076l14.02153-4.95745a3.718,3.718,0,0,1,2.47872,7.01077Z" transform="translate(-241.37629 -238.42268)" fill="#6c63ff"/><rect x="330.66409" y="483.77871" width="311.42176" height="1.48721" transform="matrix(0.94281, -0.33334, 0.33334, 0.94281, -375.06903, -48.58413)" fill="#3f3d56"/><path d="M651.33014,557.56836,403.14905,645.3151a24.56673,24.56673,0,0,1-31.3153-14.95575l-42.634-120.58516a24.56674,24.56674,0,0,1,14.95574-31.3153l248.18109-87.74674a24.56674,24.56674,0,0,1,31.31531,14.95575l42.634,120.58516A24.56674,24.56674,0,0,1,651.33014,557.56836ZM344.65123,479.861a23.078,23.078,0,0,0-14.04934,29.41741l42.634,120.58516a23.078,23.078,0,0,0,29.41741,14.04933L650.8344,556.16621a23.07794,23.07794,0,0,0,14.04933-29.41741l-42.634-120.58516a23.078,23.078,0,0,0-29.41741-14.04934Z" transform="translate(-241.37629 -238.42268)" fill="#3f3d56"/><path d="M979.37629,706.42268h-737a1,1,0,0,1,0-2h737a1,1,0,0,1,0,2Z" transform="translate(-241.37629 -238.42268)" fill="#cbcbcb"/>
            </svg>
          <svg className={styles.undraw2} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="212.6889" height="193.99112625" viewBox="0 0 567.1704 517.30967" xmlnsXlink="http://www.w3.org/1999/xlink"><rect x="326.03543" y="307.38928" width="495" height="45" transform="translate(-385.45426 -17.88532) rotate(-16.24392)" fill="#3f3d56"/><path d="M386.40028,575.96948,316.35377,335.55639a7.0001,7.0001,0,0,1,4.76257-8.67871L784.8346,191.76928a7.00645,7.00645,0,0,1,8.67871,4.76221l62.05591,212.98877-1.92016.55957L791.59315,197.09106a5.00865,5.00865,0,0,0-6.19922-3.40186L321.67579,328.7976a5.00029,5.00029,0,0,0-3.40186,6.19922l70.04651,240.41309Z" transform="translate(-316.07106 -191.48811)" fill="#3f3d56"/><path d="M752.93324,410.51a6.51233,6.51233,0,0,1-6.24341-4.6831l-11.74854-40.32324a6.50734,6.50734,0,0,1,4.42212-8.0586l40.32349-11.74853a6.50722,6.50722,0,0,1,8.05859,4.42285L799.494,390.44262a6.50733,6.50733,0,0,1-4.42212,8.05859l-40.32349,11.74854A6.47854,6.47854,0,0,1,752.93324,410.51Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M385.31751,336.3a11.691,11.691,0,0,0-.43017-1.22,11.99972,11.99972,0,0,0-22.90967,6.67,11.37989,11.37989,0,0,0,.29,1.26,12.01924,12.01924,0,0,0,11.52978,8.64,11.74908,11.74908,0,0,0,3.3501-.48A12.01262,12.01262,0,0,0,385.31751,336.3Zm-8.73,12.95a10.01322,10.01322,0,0,1-12.3999-6.8,11.435,11.435,0,0,1-.28027-1.26,9.99681,9.99681,0,0,1,19.04-5.54,8.33837,8.33837,0,0,1,.45019,1.21A10.00446,10.00446,0,0,1,376.58753,349.25006Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M355.88508,344.87a11.00221,11.00221,0,0,1,4.20834-12.0571,11,11,0,1,0,5.81753,19.96694A11.00221,11.00221,0,0,1,355.88508,344.87Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M666.7472,394.43005a6.04249,6.04249,0,0,0-7.44971-4.2L592.90736,408.8l-7.14991,2h44.89991l7.1499-2,24.75-6.92A6.04864,6.04864,0,0,0,666.7472,394.43005Z" transform="translate(-316.07106 -191.48811)" fill="#ccc"/><path d="M619.77747,380.56005a6.04513,6.04513,0,0,0-7.45019-4.19l-99.61963,27.86a6.06838,6.06838,0,0,0-4.37012,6.57h25.79l7.15967-2,74.30029-20.78A6.05544,6.05544,0,0,0,619.77747,380.56005Z" transform="translate(-316.07106 -191.48811)" fill="#ccc"/><path d="M876.24147,408.79777H393.241a7.00787,7.00787,0,0,0-7,7v286a7.00755,7.00755,0,0,0,7,7H876.24147a7.00786,7.00786,0,0,0,7-7v-286A7.00818,7.00818,0,0,0,876.24147,408.79777Zm5,293a5.00181,5.00181,0,0,1-5,5H393.241a5.0018,5.0018,0,0,1-5-5v-286a5.00213,5.00213,0,0,1,5-5H876.24147a5.00213,5.00213,0,0,1,5,5Z" transform="translate(-316.07106 -191.48811)" fill="#3f3d56"/><path d="M440.23744,447.8a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,440.23744,447.8Zm0-22a10,10,0,1,0,10,10A10.0113,10.0113,0,0,0,440.23744,425.8Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M421.58526,435.8a11.00221,11.00221,0,0,1,7.413-10.39858,11,11,0,1,0,0,20.79717A11.00222,11.00222,0,0,1,421.58526,435.8Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M488.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,488.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M512.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,512.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M536.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,536.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M573.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,573.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M597.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,597.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M621.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,621.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M658.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,658.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M682.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,682.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M706.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,706.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M743.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,743.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M767.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,767.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M791.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,791.88112,577.57805Z" transform="translate(-316.07106 -191.48811)" fill="#6c63ff"/><path d="M549.89914,677.745H420.45883a6.04736,6.04736,0,1,1,0-12.09472H549.89914a6.04736,6.04736,0,1,1,0,12.09472Z" transform="translate(-316.07106 -191.48811)" fill="#e6e6e6"/><path d="M508.39914,651.745H461.95883a6.04736,6.04736,0,1,1,0-12.09472h46.44031a6.04736,6.04736,0,1,1,0,12.09472Z" transform="translate(-316.07106 -191.48811)" fill="#e6e6e6"/><rect x="71.81005" y="277.08994" width="493" height="2" fill="#3f3d56"/></svg>
          <svg className={styles.undraw3} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="321.04576875" height="252.75" viewBox="0 0 856.12205 674" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M593.26357,266.136h-3.54069V169.13919A56.13918,56.13918,0,0,0,533.58377,113H328.0828a56.13913,56.13913,0,0,0-56.13933,56.13893v532.1324a56.13909,56.13909,0,0,0,56.13905,56.13917h205.501a56.13914,56.13914,0,0,0,56.13933-56.13895V335.18h3.54069Z" transform="translate(-171.93898 -113)" fill="#3f3d56"/><path d="M535.426,128.93322H508.60134A19.918,19.918,0,0,1,490.16,156.37379H372.4311a19.91806,19.91806,0,0,1-18.44139-27.44057H328.93542a41.92409,41.92409,0,0,0-41.92413,41.924V702.20874a41.92407,41.92407,0,0,0,41.92408,41.92408H535.426a41.92411,41.92411,0,0,0,41.92414-41.924V170.8573a41.92407,41.92407,0,0,0-41.92408-41.92408Zm-4.50666,246.49737a10.8911,10.8911,0,0,1-10.8592,10.8592H467.574a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89111,10.89111,0,0,1,10.8592-10.8592h52.48612a10.89115,10.89115,0,0,1,10.8592,10.8592Zm5.88207-47.96146a10.89111,10.89111,0,0,1-10.8592,10.8592H337.7161a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89112,10.89112,0,0,1,10.8592-10.8592H525.94221a10.89116,10.89116,0,0,1,10.8592,10.8592Zm0-47.96146a10.89111,10.89111,0,0,1-10.8592,10.8592H337.7161a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89112,10.89112,0,0,1,10.8592-10.8592H525.94221a10.89116,10.89116,0,0,1,10.8592,10.8592Zm0-47.96146a10.8911,10.8911,0,0,1-10.8592,10.8592H337.7161a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89111,10.89111,0,0,1,10.8592-10.8592H525.94221a10.89116,10.89116,0,0,1,10.8592,10.8592Z" transform="translate(-171.93898 -113)" fill="#fff"/><circle cx="169.84933" cy="213.56423" r="6.33453" fill="#fff"/><circle cx="190.66279" cy="213.56423" r="6.33453" fill="#fff"/><circle cx="211.47625" cy="213.56423" r="6.33453" fill="#fff"/><circle cx="232.28972" cy="213.56423" r="6.33453" fill="#fff"/><circle cx="300.15971" cy="261.52569" r="6.33453" fill="#fff"/><circle cx="320.97317" cy="261.52569" r="6.33453" fill="#fff"/><circle cx="341.78664" cy="261.52569" r="6.33453" fill="#fff"/><path d="M538.25762,456.6012H323.5908a19.01566,19.01566,0,0,0-19.01568,19.01563v104.59a19.01571,19.01571,0,0,0,19.01566,19.01571H538.25762a19.0157,19.0157,0,0,0,19.0157-19.01565V475.61688a19.01566,19.01566,0,0,0-19.0156-19.01568Zm-219.978,12.97163c.42392-.07665,10.47581-1.78725,18.79934,3.22117,8.323,5.00748,11.52088,14.6906,11.65264,15.1l.33649,1.04412-1.0801.19161a28.669,28.669,0,0,1-4.65836.34214,27.73763,27.73763,0,0,1-14.14144-3.56421c-8.323-5.00653-11.52041-14.6897-11.65221-15.09912l-.33651-1.04411Zm46.59851,97.10524H326.59051a10.52909,10.52909,0,0,1,0-21.05818h38.28762a10.52909,10.52909,0,0,1,0,21.05818Zm174.2086-1.91436A11.5201,11.5201,0,0,1,527.60041,576.25H498.88473a11.5201,11.5201,0,0,1-11.48627-11.48627V547.53425A11.52,11.52,0,0,1,498.88473,536.048h28.71568a11.52,11.52,0,0,1,11.48627,11.48627Z" transform="translate(-171.93898 -113)" fill="#6c63ff"/><path d="M508.14328,561.21324H496.5975a3.10848,3.10848,0,0,0,0,6.217h11.54578a3.10849,3.10849,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56"/><path d="M529.45864,561.21324H517.91281a3.10848,3.10848,0,0,0,0,6.217H529.4586a3.10849,3.10849,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56"/><path d="M508.14155,552.43841H496.59576a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56"/><path d="M529.45691,552.43841H517.91107a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56"/><path d="M508.14155,543.84123H496.59576a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56"/><path d="M529.45691,543.84123H517.91107a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56"/><rect x="487" y="383.00001" width="28" height="27.99999" fill="#e6e6e6"/><path d="M625.939,513h46v46h-46Zm44,2h-42v42h42Z" transform="translate(-171.93898 -113)" fill="#3f3d56"/><rect y="152.00001" width="28" height="28" fill="#e6e6e6"/><path d="M232.939,276h-46V230h46Zm-44-2h42V232h-42Z" transform="translate(-171.93898 -113)" fill="#3f3d56"/><polygon points="653.077 661.417 640.817 661.417 634.985 614.129 653.079 614.129 653.077 661.417" fill="#ffb8b8"/><path d="M632.06,657.91362H655.7039a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H617.17317a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,632.06,657.91362Z" fill="#2f2e41"/><polygon points="714.077 661.417 701.817 661.417 695.985 614.129 714.079 614.129 714.077 661.417" fill="#ffb8b8"/><path d="M693.06,657.91362H716.7039a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H678.17317a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,693.06,657.91362Z" fill="#2f2e41"/><path d="M763.51493,605.30342a10.74267,10.74267,0,0,1,4.51052-15.84306l41.67577-114.86668,20.5071,11.19135L782.62359,595.55579a10.80091,10.80091,0,0,1-19.10866,9.74763Z" transform="translate(-171.93898 -113)" fill="#ffb8b8"/><path d="M879.75379,626.88737a10.74271,10.74271,0,0,1-2.89305-16.21659L863.95,489.16137l23.33776,1.06622L892.65342,609.748a10.80091,10.80091,0,0,1-12.89963,17.13934Z" transform="translate(-171.93898 -113)" fill="#ffb8b8"/><circle cx="670.5842" cy="315.75634" r="24.56103" fill="#ffb8b8"/><path d="M879.59694,599.25244H805.55006l.08911-.57617c.13306-.86133,13.19678-86.439,3.56177-114.436a11.813,11.813,0,0,1,6.06934-14.58349h.00024c13.77173-6.48535,40.20752-14.47119,62.52,4.90918a28.23446,28.23446,0,0,1,9.45947,23.396Z" transform="translate(-171.93898 -113)" fill="#ccc"/><path d="M819.77174,524.88428l-33.33667-6.76319,15.62622-37.02978a13.99723,13.99723,0,0,1,27.10571,6.99756Z" transform="translate(-171.93898 -113)" fill="#ccc"/><path d="M862.46778,537.44189l-2.00415-45.9414c-1.51977-8.63623,3.42408-16.80029,11.02735-18.13477,7.60547-1.32959,15.03174,4.66016,16.55835,13.35987l7.533,42.92773Z" transform="translate(-171.93898 -113)" fill="#ccc"/><path d="M877.13341,593.75241c11.91455,45.37671,13.21436,103.06939,10,166l-16-2-29-120-16,122-18-1c-5.37744-66.02973-10.61328-122.71527-2-160Z" transform="translate(-171.93898 -113)" fill="#2f2e41"/><path d="M858.70645,447.73782c-4.582,4.88078-13.09131,2.26066-13.68835-4.40717a8.05477,8.05477,0,0,1,.01014-1.5557c.30826-2.95357,2.01461-5.635,1.60587-8.7536a4.59042,4.59042,0,0,0-.84011-2.14891c-3.65124-4.88934-12.22227,2.18687-15.6682-2.2393-2.113-2.714.3708-6.98712-1.25065-10.02051-2.14006-4.00357-8.47881-2.0286-12.45388-4.22115-4.42275-2.43949-4.15821-9.22525-1.24686-13.35269,3.55052-5.0336,9.77572-7.71952,15.92336-8.10661s12.25292,1.27475,17.99229,3.51145c6.52109,2.54134,12.98768,6.05351,17.00067,11.78752,4.88021,6.97317,5.34986,16.34794,2.90917,24.50175C867.5152,437.69294,862.44812,443.75214,858.70645,447.73782Z" transform="translate(-171.93898 -113)" fill="#2f2e41"/><path d="M1027.061,787h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-171.93898 -113)" fill="#3f3d56"/></svg>
          </div>
          <div className={styles.details}>
          <h1 className={styles.headerone}>One app the world loves</h1>
          <p className={styles.paragraph}>Open a free account now on your phone and make your money go further</p>
          <button className={styles.button1}>Get Started</button>
          <span className={styles.button2}><IoFlameSharp/> Now it's free</span>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Home
