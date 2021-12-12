import { AxiosRequestConfig } from 'axios';
import React from 'react';
import { PlanetDataDisplay, SaveButtonContainer } from 'src/components/organisms';
import { INasaApiData } from 'src/models/interface';

interface IProps {
    planetData: INasaApiData;
    onApiFetchHandler: (config?: AxiosRequestConfig) => unknown;
}

const PlanetDataBox: React.FC<IProps> = ({ planetData, onApiFetchHandler }) => {
    return (
        <>
            <PlanetDataDisplay planetData={planetData} />
            <SaveButtonContainer fetchedData={planetData} onApiFetchHandler={onApiFetchHandler} />
        </>
    );
};

export default PlanetDataBox;
