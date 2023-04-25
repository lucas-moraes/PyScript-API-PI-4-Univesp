import pandas as pd

def generate_group_data(df):
    group = pd.DataFrame(df, columns=['RACA', 'Qtde'])
    group = group.groupby('RACA')['Qtde'].sum()
    return group.to_json()