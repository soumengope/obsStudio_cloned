import Head from 'next/head';
import indexStyle from '../styles/index.module.css';
import Image from "next/image"
const Index = ()=>{
    return(
        <>
        <Head>
            <title>next project</title>
            <meta name='viewport' content='width-device-width,initial-scale=1.0'/>
        </Head>

        <div className={indexStyle.OBS_mainDiv_header}>
        <div className={indexStyle.OBS_header}>OBS</div>
        <div className={indexStyle.OBS_bottom_header}>Open Brodcaster Software</div>
        <div className={indexStyle.OBS_list}>
            <div>Home</div>
            <div>Download</div>
            <div>Blog</div>
            <div>Help</div>
            <div>Forum</div>
        </div>
        </div>

        <div className={indexStyle.OBS_secondDiv}>
            <div className={indexStyle.OBS_topLogos}>
                <div className={indexStyle.OBS_topLogosList1}><Image src = "/email.png" width="25px" height="20px"></Image></div>
                <div className={indexStyle.OBS_topLogosList2}><Image src = "/twitter.png" width="25px" height="25px"></Image></div>
                <div className={indexStyle.OBS_topLogosList3}><Image src = "/github.png" width="35px" height="35px"></Image></div>
                <div className={indexStyle.OBS_topLogosList4}>
                    <div><Image src = "/love.png" width="25px" height="25px"></Image></div>
                    <div className={indexStyle.OBS_topLogosListp4}>Contribute</div>
                </div>
            </div>
            
            <div className={indexStyle.OBS_topLogosMob}>
                <div className={indexStyle.OBS_topLogosList1Mob}><Image src = "/email.png" width="25px" height="20px"></Image></div>
                <div className={indexStyle.OBS_topLogosList2Mob}><Image src = "/twitter.png" width="25px" height="25px"></Image></div>
                <div className={indexStyle.OBS_topLogosList3Mob}><Image src = "/github.png" width="35px" height="35px"></Image></div>
                <div className={indexStyle.OBS_topLogosList4Mob}>
                    <div><Image src = "/love.png" width="25px" height="25px"></Image></div>
                    <div className={indexStyle.OBS_topLogosListp4Mob}>Contribute</div>
                </div>
            </div>

            <div className={indexStyle.OBS_studioHead}>OBS Studio</div>
            <div className={indexStyle.OBS_releaseText}>
            <div>Latest Release</div>
            <div className={indexStyle.OBS_releaseText_img}><Image src='/windows.png' width='20px' height='20px'></Image></div>
            <div className={indexStyle.OBS_releaseText_img}><Image src='/apple.png' width='20px' height='20px'></Image></div>
            <div className={indexStyle.OBS_releaseText_img}><Image src='/linux.png' width='20px' height='20px'></Image></div>
            <div>29.0.2 - February 4th</div>
            </div>
            <div className={indexStyle.OBS_platforms}>
                <div className={indexStyle.OBS_platformsList}>Windows</div>
                <div className={indexStyle.OBS_platformsList} >macOS</div>
                <div className={indexStyle.OBS_platformsList}>Linux</div>
            </div>
            <div className={indexStyle.OBS_texts1}>Free and open source software for video recording and live streaming.</div>
            <div className={indexStyle.OBS_texts2}>Download and start streaming quickly and easily on Windows, Mac or Linux.</div>
            <div className={indexStyle.OBS_image}>
                <Image layout='intrinsic' objectFit='cover' src='/hero.png' width={600} height={500}></Image>
            </div>
            <div classname={indexStyle.becomeSponser}>The OBS Project is made possible thanks to generous contributes from our sponsers and 
                backers. Learn more about how You can <br/> <a href='#'>become a sponsor</a></div>
            
            <div className={indexStyle.polygonDiv}></div>

        </div>
        
        <div className={indexStyle.premireTier}>
            <div className={indexStyle.premireTier_header}>Premier Tier</div>
            <div className={indexStyle.premireTier_lists1}>
                <div><Image src='/ytlogo.png' width='160px' height='30px'></Image></div>
                <div><Image src='/logitech.png' width='140px' height='30px'></Image></div>
            </div>
            <div className={indexStyle.premireTier_lists2}>
                <div><Image src='/twitch.png' width='150px' height='35px'></Image></div>
                <div><Image src='/facebook.png' width='150px' height='20px'></Image></div>
            </div>
        </div>
        <div className={indexStyle.diamondTier}>
            <div className={indexStyle.diamondTier_header}>Diamond Tier</div>
            <div className={indexStyle.diamondTier_lists}>
            <div><Image src='/nvidia.png' width='150px' height='30px'></Image></div>
            <div><Image src='/stream.png' width='140px' height='30px'></Image></div>
            <div><Image src='/ryzen.png' width='180px' height='35px'></Image></div>
            </div>
        </div>
        <div className={indexStyle.goldTier}>
            <div className={indexStyle.goldTier_header}>Gold Tier</div>
            <div className={indexStyle.goldTier_img}><Image src='/synura.png' width='150px' height='30px'></Image></div>
        </div>
        
        </>
    )
}
export default Index;