import requests

API_KEY = "vqst4lZLC7kPyotHSQhiZD53zuth7qDKyLLcs0oUOZqMQZBlKAHc8PIUlbH2qLPJxDc22HH4w_FyS5EkHwEiKi6V6xEa6kstkvBL3N0cKpfX23tCAxTXC__kmPmdXXYx"
ENDPOINT = "https://api.yelp.com/v3/businesses/search?limit=12&"


def search_yelp(term, location, search_by):
    url = ENDPOINT + f"term={term}" + f"&location={location}" + f"&sort_by={search_by}"
    headers = {"Authorization": f"Bearer {API_KEY}"}
    response = requests.get(url, headers=headers)
    return response.json()
