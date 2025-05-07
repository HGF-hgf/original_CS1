local ids = {
    "jEk0H", "OxaCZ", "Iz3Tj", "IQWau", "HrHqd", 
    "94wwY", "d1HqS", "1wqfZ", "kTPMQ", "KqMJK"
  }
  local counter = 0
  
  request = function()
    counter = (counter % #ids) + 1
    local id = ids[counter]
    local response = wrk.format("GET", "/short/" .. id)
  
    -- Gửi request và trả về response
    return response
  end
  