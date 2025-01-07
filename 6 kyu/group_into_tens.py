def group_in_10s(*args):
    sorted_args = sorted(args)
    args_2d_list = []
    current_list = []
    current_ten = 0
    i = 0

    while i < len(sorted_args):
        current_list = []
        print(f"Starting inner while loop")
        while i < len(sorted_args) and sorted_args[i] < current_ten + 10:
            print(f"sorted args i is {sorted_args[i]}")
            current_list.append(sorted_args[i])
            print(f"current list is now {current_list}")
            i += 1
            print(f"i is now {i}")
        if current_list:
            print(f"if current list check was True")
            args_2d_list.append(current_list)
            print(f"args 2d list is now {args_2d_list}")
        else:
            print(f"if current list check was False")
            args_2d_list.append(None)
            print(f"args 2d list is now {args_2d_list}")
        current_ten += 10
        print(f"current ten is now {current_ten}")

    # max_ten = (sorted_args[-1] // 10) * 10
    # while current_ten <= max_ten:
    #     args_2d_list.append(None)
    #     current_ten += 10

    return args_2d_list

print(group_in_10s(8, 12, 38, 3, 17, 19, 25, 35, 50))