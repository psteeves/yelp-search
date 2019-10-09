from flask import Blueprint, request
from backend.utils import search_yelp


api = Blueprint("api", __name__)


@api.route("/")
def index():
    return "<h1>Hello world</h1>"


@api.route("/search_yelp")
def search():
    search_term = request.args.get("term", "")
    search_location = request.args.get("location", "")
    search_by = request.args.get("sort_by", "best_match")
    return search_yelp(search_term, search_location, search_by)
