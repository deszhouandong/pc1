import { request, config } from '../utils'

const { api } = config

const { musicRankings } = api

//获取音乐排行榜
export function getMusicRankings(param){
  return request({
    url: musicRankings,
    method: 'post',
    data: param,
  })
}