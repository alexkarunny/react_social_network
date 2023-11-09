import React, {ComponentType} from 'react';
import {Preloader} from 'components/Common/Preloader/Preloader';


export function WithSuspense<T>(Component: ComponentType<T>) {
    debugger
    return (props: any) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}

