import os

def create_directory_structure(base_path, structure):
    """
    递归创建目录结构

    参数:
        base_path (str): 基础路径
        structure (dict): 目录结构，键为目录名，值为子目录结构或 None
    """
    for directory, subdirectories in structure.items():
        # 创建目录路径
        dir_path = os.path.join(base_path, directory)

        # 如果目录不存在，则创建
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)
            print(f"创建目录: {dir_path}")
        else:
            print(f"目录已存在: {dir_path}")

        # 如果该目录有子目录，则递归创建
        if subdirectories:
            create_directory_structure(dir_path, subdirectories)

# 定义目录结构
directory_structure = {
    "components": {
        "sections": None,
        "common": None,
        "modals": None,
        "layout": None
    },
    "assets": {
        "scss": {
            "base": None,
            "components": None,
            "layout": None
        },
        "data": None
    },
    "utils": None
}

# 指定基础路径（根据需要修改）
base_path = "src"

# 创建目录结构
create_directory_structure(base_path, directory_structure)