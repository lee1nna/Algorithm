


w_chess = ['' for _ in range(8)] * 8
b_chess = ['' for _ in range(8)] * 8
for i in range(8):
    for j in range(8):
        if i+j %2 == 0:
            b_chess = "B"
            w_chess = "W"

        else:
            b_chess = "W"
            w_chess = "B"
