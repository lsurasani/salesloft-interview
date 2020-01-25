class Api::PeopleController < Api::BaseController
  include HTTParty

  def all
    url = "https://api.salesloft.com/v2/people.json?per_page=15&include_paging_counts=true"
    url += "&page=#{params[:page]}" if params[:page]

    auth = "Bearer #{ENV['Authtoken']}"
    headers = {
      Authorization: auth
    }
    response = HTTParty.get(url, headers: headers)
    render json: response
  end
end
