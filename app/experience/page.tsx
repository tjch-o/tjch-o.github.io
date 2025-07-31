import NavBar from '@/components/nav/NavBar';
import AzendianCard from '@/components/experience/azendian/azendianCard';
import IrasCard from '@/components/experience/iras/irasCard';
import IdemiaCard from '@/components/experience/idemia/idemiaCard';

function Experience() {
    return (
        <div className="h-screen overflow-auto bg-tokyo-night">
            <NavBar />
            <div className="flex flex-col justify-center m-16 space-y-16 pt-16">
                <IdemiaCard />
                <IrasCard />
                <AzendianCard />
            </div>
        </div>
    );
}

export default Experience;
