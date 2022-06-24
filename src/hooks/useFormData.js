// import * as React from 'react';
//
// import getData from './useData'
//
// let localcache = null
//
// function useFormData(year) {
//     const [data, setData] = React.useState(localcache);
//     React.useEffect(() => {
//         let unmounted = false;
//         if (data == null) {
//             let res = getData(year);
//             res.then((d) => {
//                 setData(d)
//                 localcache = d
//             })
//             unmounted = !unmounted
//         }
//         return () => { unmounted = true };
//     }, [ year ]);
//     return data;
// }
//
// export default useFormData;