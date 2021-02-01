import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class apiUrls {
   static server = environment.serverUrl;  
 
  static readonly api = '/api';
  static readonly me = `${apiUrls.server}api/me`;
  static readonly upload = `${apiUrls.server}api/me/upload`;
  static readonly login = `${apiUrls.server}api/login`;
  static readonly createUser = `${apiUrls.server}api/users`;
  static readonly change_password = '/api/me/change_password';
  //chat
  static readonly contact_list = '/api/me/contacts';
  static readonly conversations = '/api/me/conversations';
  static readonly create_message = '/api/me/conversations/message';
  static readonly create_group = '/api/me/conversations/group'//deprecated;
  static readonly message_list = '/api/me/conversations/messages';
  static readonly download_file = '/api/me/conversations/message/file';
  //matches
  static readonly match = '/api/me/match';
  static readonly match_status = '/api/me/match/status';
  static readonly pause = '/api/me/match/pause';
  static readonly candidates = '/api/me/match/candidates';
  static readonly candidates_status = '/api/me/match/candidates/status';
  //communities
  static readonly network_categories = `${apiUrls.server}public/network_categories`;
  static networks (id) { return apiUrls.server + 'public/networks?key_category='+id+'&latitude=-34.6037&longitude=-58.381'};
  static communities (key) { return apiUrls.server + '/public/communities?key_network='+key};
  static readonly me_networks = '/api/me/networks';
  static readonly me_communities = '/api/me/communities';
  static readonly environments = '/public/environments';
  static readonly me_environments = '/api/me/environments';
  //public
  static readonly assets = '/public/assets';
 // QA 
  static readonly qa_url = `${apiUrls.server}api/me/hai/q_a`;
  
}