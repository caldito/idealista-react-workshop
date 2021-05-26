import React, { useEffect } from 'react';
import Ad from './components/Ad';
import CreateAd from './components/CreateAd';
import AdList from './components/AdList';
import fixtures from './fixtures/ads';
import ids from './libs/id';

const adsData = fixtures();

export default ({ name = '' }) => {
    
    const [ads, setAds] = React.useState([]);

    const onFavorited = id => {
        const newAdList = ads.map(ad => {
            if (ad.id === id) {
                return { ...ad, isFav: !ad.isFav };
            }

            return ad;
        });

        setAds(newAdList);
    };

    const onDiscarded = id => {
        const newAdList = ads.filter(ad => ad.id != id);
        setAds(newAdList);
    };

    const onDiscardedAll = () => {
        setAds([]);
    };

    const onCreatedAd = ad => {
        const newList = [{...ad, id: ids.next().value }, ...ads];
        setAds(newList);
    };

    return (
        <div className="container">
            <CreateAd onCreatedAd={onCreatedAd} />
            { <AdList onFavorited={onFavorited} onDiscarded={onDiscarded} onDiscardedAll={onDiscardedAll} ads={ads} />}
            
        </div>
    )
};
