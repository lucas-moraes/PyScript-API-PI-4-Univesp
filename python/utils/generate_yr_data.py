import pandas as pd

def generate_yr_data(df):
    yr = pd.DataFrame(df, columns=['IDADE'])
    yr = yr.where(yr['IDADE'] <= 15)
    yr = yr.groupby('IDADE')['IDADE'].count()
    return yr.to_json()