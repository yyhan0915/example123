import { INasaApiData } from 'src/models/interface';

const getInitialPlanetData = (): INasaApiData => {
    return {
        copyright: '',
        date: '',
        explanation: '',
        hdurl: '',
        media_type: '',
        service_version: '',
        title: '',
        url: '',
    };
};

export default getInitialPlanetData;
