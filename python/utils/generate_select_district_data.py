import pandas as pd

def generate_select_district_data(df):
    district = pd.DataFrame(df, columns=['DISTRITO'])
    district = district.groupby('DISTRITO')['DISTRITO'].count()
    return district.to_json()