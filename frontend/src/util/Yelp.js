const apiKey = "vqst4lZLC7kPyotHSQhiZD53zuth7qDKyLLcs0oUOZqMQZBlKAHc8PIUlbH2qLPJxDc22HH4w_FyS5EkHwEiKi6V6xEa6kstkvBL3N0cKpfX23tCAxTXC__kmPmdXXYx";

export const Yelp = {
    search(term, location, sortBy) {
        const url = "http://127.0.0.1:5000/search_yelp?" + `term=${term}&location=${location}&sort_by=${sortBy}`;
        console.log("Searching for restaurants at "+url);
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
