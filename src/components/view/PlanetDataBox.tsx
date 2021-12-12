import { AxiosRequestConfig } from 'axios';
import React from 'react';
import { PlanetDataDisplay, SaveButtonContainer } from 'src/components/organisms';
import { INasaApiData } from 'src/models/interface';

interface IProps {
    planetData: INasaApiData;
    handleApiFetch: (config?: AxiosRequestConfig) => unknown;
}

const PlanetDataBox: React.FC<IProps> = ({ planetData, handleApiFetch }) => {
    return (
        <>
            <PlanetDataDisplay planetData={planetData} />
            <SaveButtonContainer fetchedData={planetData} handleApiFetch={handleApiFetch} />
        </>
    );
};

export default PlanetDataBox;
