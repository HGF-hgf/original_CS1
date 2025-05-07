local counter = 0
local ids = {}  
request = function()
    counter = counter + 1
    
    local long_url = "https://example.com/page/" .. counter
    local payload = '{"long_url":"' .. long_url .. '"}'
    
    local post_response = wrk.format("POST", "/create", 
        {["Content-Type"] = "application/json"}, 
        payload)
    
    table.insert(ids, counter) 
    

    local id = tostring(ids[counter]) 
    local get_url = "/short/" .. id
    local get_response = wrk.format("GET", get_url)

    return get_response
end
