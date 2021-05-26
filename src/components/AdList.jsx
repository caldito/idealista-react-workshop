import React from 'react';
import Ad from './Ad';

export default ({ ads = [], onFavorited = () => null, onDiscarded = () => null, onDiscardedAll = () => null }) => (
    <div>
        <button onClick={onDiscardedAll}>Discard All</button>
        { ads.map(ad => <Ad {...ad} onFavorited={onFavorited} onDiscarded={onDiscarded} key={ad.id} />) }
    </div>
);