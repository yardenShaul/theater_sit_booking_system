import { utilService } from "./util-service"
// const STORAGE_KEY = 'theater_DB'

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
}

function query(entityType) {
  let entities = JSON.parse(localStorage.getItem(entityType))
  if (!entities) {
    entities = utilService.getDefaultTheater()
    _save(entityType,entities)
  }
  return entities
}

function get(entityType, entityId) {
  return query(entityType)
    .then((entities) => {
      if (!entityId) return entities[0] 
      return entities.find((entity) => entity._id === entityId)
    })
}

function post(entityType, newEntity) {
  newEntity._id = utilService.makeId()
  return query(entityType).then((entities) => {
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  })
}

function put(entityType, updatedEntity) {
  // return query(entityType).then((entities) => {
  //   const idx = entities.findIndex((entity) => entity.name === updatedEntity.name)
  //   entities.splice(idx, 1, updatedEntity)
  //   _save(entityType, entities)
  //   return updatedEntity
  // })
  _save(entityType, updatedEntity)
  return updatedEntity
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
  })
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

