import matplotlib.pyplot as plt

# GET API dữ liệu
get_avg = 28556.05
get_stdev = 381.00
get_max = 5640

# POST API dữ liệu
post_avg = 9507.79
post_stdev = 172.18
post_max = 1230

# Vẽ biểu đồ cho GET
plt.figure(figsize=(8, 5))
plt.bar(['Avg', 'Stdev', 'Max'], [get_avg, get_stdev, get_max], color=['skyblue', 'orange', 'green'])
plt.title("Request/sec - API GET /short/:id")
plt.ylabel("Requests/sec")
plt.grid(axis='y')
plt.tight_layout()
plt.show()

# Vẽ biểu đồ cho POST
plt.figure(figsize=(8, 5))
plt.bar(['Avg', 'Stdev', 'Max'], [post_avg, post_stdev, post_max], color=['skyblue', 'orange', 'green'])
plt.title("Request/sec - API POST /create")
plt.ylabel("Requests/sec")
plt.grid(axis='y')
plt.tight_layout()
plt.show()
