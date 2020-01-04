const apiKey = <Your api key>;
const endpoint = "https://api.yelp.com/v3/businesses/search?limit=12&";
const CORSAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

export const Yelp = {
    search(term, location, sortBy) {
        const url = CORSAnywhereUrl + endpoint + `term=${term}&location=${location}&sort_by=${sortBy}`;
        console.log("hitting "+url);
        const headers = {Authorization: `Bearer ${apiKey}`};
        return fetch(url, {headers: headers}).then(
            response => response.json()
        ).then(
            jsonResponse =>  {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(
                        business => {
                            return {
                                id: business.id,
                                imageSrc: business.image_url,
                                name: business.name,
                                address: business.location.address1,
                                city: business.location.city,
                                state: business.location.state,
                                zipCode: business.location.zip_code,
                                category: business.categories[0].title,
                                rating: business.rating,
                                reviewCount: business.review_count
                            }
                        }
                    )
                } else {
                    return [];
                }
            }
        );
    },
};
