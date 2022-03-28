import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { TiFlash } from 'react-icons/ti';

import CardComponent from '../CardComponent/CardComponent';

import './features.css';

const FeaturesComponent = () => {
  return (
    <div className='overall-container'>
      <div className='container'>
        <div className='features-container'>
          <CardComponent
            Icon={BsSearch}
            title='Resource Management'
            description='Nova provides a full CRUD interface for your Eloquent models. Every type of Eloquent relationship is fully supported. Need to edit the pivot data on your polymorphic many-to-many relationship? We have you covered.'
          />
          <CardComponent
            Icon={TiFlash}
            title='Actions'
            description='Actions are PHP tasks that you can run against a resource or batch of resources. Have an action that takes a while? No problem, Nova’s queued actions will keep your administration panel feeling snappy.'
          />
          <CardComponent
            Icon={BsSearch}
            title='Resource Management'
            description='Nova provides a full CRUD interface for your Eloquent models. Every type of Eloquent relationship is fully supported. Need to edit the pivot data on your polymorphic many-to-many relationship? We have you covered.'
          />
          <CardComponent
            Icon={TiFlash}
            title='Actions'
            description='Actions are PHP tasks that you can run against a resource or batch of resources. Have an action that takes a while? No problem, Nova’s queued actions will keep your administration panel feeling snappy.'
          />
          <CardComponent
            Icon={BsSearch}
            title='Resource Management'
            description='Nova provides a full CRUD interface for your Eloquent models. Every type of Eloquent relationship is fully supported. Need to edit the pivot data on your polymorphic many-to-many relationship? We have you covered.'
          />
          <CardComponent
            Icon={TiFlash}
            title='Actions'
            description='Actions are PHP tasks that you can run against a resource or batch of resources. Have an action that takes a while? No problem, Nova’s queued actions will keep your administration panel feeling snappy.'
          />
          <CardComponent
            Icon={TiFlash}
            title='Actions'
            description='Actions are PHP tasks that you can run against a resource or batch of resources. Have an action that takes a while? No problem, Nova’s queued actions will keep your administration panel feeling snappy.'
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
