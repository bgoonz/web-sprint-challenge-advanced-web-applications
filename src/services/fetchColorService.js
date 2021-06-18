// import axiosWithAuth from '../helpers/axiosWithAuth';
//
// const fetchColors = () => {
//
// }
//
// export default fetchColors;
import axiosWithAuth from "../helpers/axiosWithAuth";

async function fetchColors( setFunction ) {
  axiosWithAuth()
    .get( "/api/colors" )
    .then( ( response ) => {
      setFunction( response.data );
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
}

async function deleteColors( id ) {
  axiosWithAuth()
    .delete( `/api/colors/${id}` )
    .then( ( response ) => {
      console.log( response.data );
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
}

async function editColors( neoColor ) {
    axiosWithAuth()
      .put( `/api/colors/${neoColor.id}`, neoColor )
      .then( ( response ) => {
        console.log( response.data );
      } )
      .catch( ( err ) => {
        console.log( err );
      } );
}

export {
  deleteColors,
  editColors,
  fetchColors
};

export default fetchColors;
